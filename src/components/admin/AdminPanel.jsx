import { useEffect, useState } from 'react'
import { itemCatalog } from '../../data/itemCatalog'
import { pokemonCatalog } from '../../data/pokemonCatalog'
import { apiClient } from '../../lib/apiClient'
import { localDb } from '../../lib/localDb'

const roleLabels = {
  0: 'Tester del sistema',
  1: 'Admin',
  2: 'Líder de gremio',
  3: 'Alto Mando',
  4: 'Usuario normal',
}

const rouletteWheels = [
  { id: 'category', label: 'Categorías' },
  { id: 'bronze', label: 'Bronce' },
  { id: 'silver', label: 'Plata' },
  { id: 'gold', label: 'Oro' },
  { id: 'diamond', label: 'Diamante' },
]

const sanctionLabels = {
  warning: 'Advertencia',
  suspension: 'Suspensión',
  ban: 'Ban',
}

const normalizeAnnouncements = (entries = []) => entries.map((entry, index) => typeof entry === 'string'
  ? { id: `local-${index}`, message: entry, imageData: '' }
  : { ...entry, id: entry.id ?? `announcement-${index}`, message: entry.message || '', imageData: entry.imageData || '' })

export function AdminPanel({ user, setRemoteUser, setAnnouncements, setShopCatalog }) {
  const [userDirectory, setUserDirectory] = useState([])
  const [dashboard, setDashboard] = useState({ announcements: [], shopCatalog: [], roulettePrizes: [], sanctions: [], accountDeletionRequests: [] })
  const [notice, setNotice] = useState('')
  const [loading, setLoading] = useState(true)
  const [newShopEntry, setNewShopEntry] = useState({ category: 'item', catalogId: '', price: 50, quantity: 10, shiny: false })
  const [shopSearch, setShopSearch] = useState('')
  const [shopCategoryFilter, setShopCategoryFilter] = useState('all')
  const [activeRouletteWheel, setActiveRouletteWheel] = useState('category')
  const [rouletteSearch, setRouletteSearch] = useState('')
  const [rouletteCatalogSearch, setRouletteCatalogSearch] = useState('')
  const [sanctionForm, setSanctionForm] = useState({ userId: '', sanctionType: 'warning', reason: '' })
  const [accountDeletion, setAccountDeletion] = useState({ userId: '', confirmation: '' })

  useEffect(() => {
    let active = true
    const loadAdminData = async () => {
      setLoading(true)
      try {
        if (!apiClient.isConfigured()) {
          throw new Error('La administración requiere conexión con el servidor.')
        }
        const [directory, data] = await Promise.all([
          apiClient.getUserDirectory(),
          apiClient.getAdminDashboard(),
        ])
        if (!active) return
        setUserDirectory(directory.users || [])
        setDashboard({
          announcements: normalizeAnnouncements(data.announcements || []),
          shopCatalog: data.shopCatalog || [],
          roulettePrizes: data.roulettePrizes || [],
          sanctions: data.sanctions || [],
          accountDeletionRequests: data.accountDeletionRequests || [],
        })
        setNotice('')
      } catch (error) {
        if (active) setNotice(error.message)
      } finally {
        if (active) setLoading(false)
      }
    }
    loadAdminData()
    return () => { active = false }
  }, [])

  const updateUserRole = async (targetUserId, roleLevel) => {
    try {
      const result = await apiClient.updateUserRole(targetUserId, roleLevel)
      setUserDirectory(result.users || [])
      if (Number(user.id) === Number(targetUserId)) setRemoteUser({ ...user, roleLevel: Number(roleLevel) })
      setNotice('Rango actualizado correctamente.')
    } catch (error) {
      setNotice(error.message)
    }
  }

  const updateAnnouncement = (id, field, value) => {
    setDashboard((current) => ({
      ...current,
      announcements: current.announcements.map((entry) => String(entry.id) === String(id) ? { ...entry, [field]: value } : entry),
    }))
  }

  const updateAnnouncementImage = (id, file) => {
    if (!file) return
    if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type)) {
      setNotice('Elige una imagen PNG, JPEG, WebP o GIF.')
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      setNotice('Cada imagen debe pesar 2 MB o menos.')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      updateAnnouncement(id, 'imageData', String(reader.result || ''))
      setNotice('')
    }
    reader.onerror = () => setNotice('No se pudo leer el archivo de imagen.')
    reader.readAsDataURL(file)
  }

  const saveAnnouncements = async () => {
    const entries = dashboard.announcements
      .map(({ message, imageData }) => ({ message: message.trim(), imageData }))
      .filter((entry) => entry.message || entry.imageData)
    try {
      const saved = apiClient.isConfigured()
        ? (await apiClient.saveAnnouncements(entries)).announcements
        : localDb.saveAnnouncements(entries)
      const normalized = normalizeAnnouncements(saved || [])
      setDashboard((current) => ({ ...current, announcements: normalized }))
      setAnnouncements(normalized)
      setNotice('Anuncios actualizados correctamente.')
    } catch (error) {
      setNotice(error.message)
    }
  }

  const updateShopEntry = (index, field, value) => {
    setDashboard((current) => ({
      ...current,
      shopCatalog: current.shopCatalog.map((entry, entryIndex) => entryIndex === index ? { ...entry, [field]: value } : entry),
    }))
  }

  const addShopEntry = () => {
    const options = newShopEntry.category === 'item'
      ? itemCatalog
      : pokemonCatalog.filter((pokemon) => !pokemon.baseSpecies)
    const selected = options.find((entry) => entry.id === newShopEntry.catalogId)
    if (!selected) {
      setNotice('Selecciona un producto para agregar a la tienda.')
      return
    }
    if (dashboard.shopCatalog.some((entry) => entry.category === newShopEntry.category && entry.name.toLowerCase() === selected.name.toLowerCase())) {
      setNotice(`${selected.name} ya está en el catálogo.`)
      return
    }
    setDashboard((current) => ({
      ...current,
      shopCatalog: [...current.shopCatalog, {
        id: `new-${newShopEntry.category}-${selected.id}`,
        category: newShopEntry.category,
        name: selected.name,
        price: Math.max(0, Number(newShopEntry.price) || 0),
        quantity: Math.max(0, Math.floor(Number(newShopEntry.quantity) || 0)),
        description: selected.description || 'Disponible en la tienda de la comunidad.',
        rarity: 'Común',
        enabled: true,
        shiny: newShopEntry.category === 'pokemon' && newShopEntry.shiny,
      }],
    }))
    setNewShopEntry((current) => ({ ...current, catalogId: '' }))
    setNotice(`${selected.name} agregado. Guarda el catálogo para publicar los cambios.`)
  }

  const saveShopCatalog = async () => {
    const entries = dashboard.shopCatalog.map((entry) => ({
      ...entry,
      price: Number(entry.price),
      quantity: Number(entry.quantity),
      enabled: entry.enabled === true || entry.enabled === 1 || entry.enabled === '1',
    }))
    try {
      const result = apiClient.isConfigured()
        ? await apiClient.saveShopCatalog(entries)
        : { shopCatalog: localDb.saveShopCatalog(entries) }
      const saved = result.shopCatalog || []
      setDashboard((current) => ({ ...current, shopCatalog: saved }))
      setShopCatalog(saved)
      setNotice('Catálogo de la tienda actualizado.')
    } catch (error) {
      setNotice(error.message)
    }
  }

  const updateRoulettePrize = (index, field, value) => {
    setDashboard((current) => ({
      ...current,
      roulettePrizes: current.roulettePrizes.map((entry, entryIndex) => entryIndex === index ? { ...entry, [field]: value } : entry),
    }))
  }

  const addRoulettePrize = (prizeType) => {
    const isCategory = activeRouletteWheel === 'category'
    const wheelType = isCategory ? 'category' : 'prize'
    const entry = {
      id: `draft-${Date.now()}-${dashboard.roulettePrizes.length}`,
      wheelType,
      coinType: isCategory ? 'bronze' : activeRouletteWheel,
      prizeType,
      name: isCategory ? (prizeType === 'item' ? 'Objetos' : 'Pokémon') : '',
      amount: 1,
      rarity: 'Común',
      probability: isCategory ? 50 : 100,
      enabled: true,
    }
    setDashboard((current) => ({ ...current, roulettePrizes: [...current.roulettePrizes, entry] }))
  }

  const removeRoulettePrize = (index) => {
    setDashboard((current) => ({
      ...current,
      roulettePrizes: current.roulettePrizes.filter((_, entryIndex) => entryIndex !== index),
    }))
  }

  const saveRoulette = async () => {
    try {
      const result = await apiClient.saveRoulettePrizes(dashboard.roulettePrizes.map((entry) => ({
        ...entry,
        amount: Number(entry.amount),
        probability: Number(entry.probability),
        enabled: entry.enabled === true || entry.enabled === 1 || entry.enabled === '1',
      })))
      setDashboard((current) => ({ ...current, roulettePrizes: result.roulettePrizes || [] }))
      setNotice('Premios de la ruleta actualizados.')
    } catch (error) {
      setNotice(error.message)
    }
  }

  const saveSanction = async () => {
    const userId = Number(sanctionForm.userId)
    const reason = sanctionForm.reason.trim()
    if (!Number.isInteger(userId) || !reason) {
      setNotice('Debes seleccionar un usuario y escribir el motivo de la sanción.')
      return
    }

    try {
      await apiClient.saveSanction(userId, sanctionForm.sanctionType, reason)
      const data = await apiClient.getAdminDashboard()
      setDashboard((current) => ({ ...current, sanctions: data.sanctions || [] }))
      setSanctionForm((current) => ({ ...current, userId: '', reason: '' }))
      setNotice('Sanción registrada correctamente.')
    } catch (error) {
      setNotice(error.message)
    }
  }

  const deleteAccount = async () => {
    const target = userDirectory.find((entry) => Number(entry.id) === Number(accountDeletion.userId))
    if (!target || accountDeletion.confirmation !== target.username) {
      setNotice('Escribe exactamente el nombre de usuario seleccionado para confirmar la supresión.')
      return
    }

    try {
      const result = await apiClient.deleteAccount(target.id)
      setUserDirectory((current) => current.filter((entry) => Number(entry.id) !== Number(target.id)))
      setDashboard((current) => ({
        ...current,
        accountDeletionRequests: current.accountDeletionRequests.filter((entry) => Number(entry.userId) !== Number(target.id)),
      }))
      setAccountDeletion({ userId: '', confirmation: '' })
      setNotice(`Cuenta suprimida. Se eliminaron también ${result.deleted.chatMessages} mensajes globales y ${result.deleted.guildMessages} mensajes de gremio.`)
    } catch (error) {
      setNotice(error.message)
    }
  }

  const visibleRoulettePrizes = dashboard.roulettePrizes
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => activeRouletteWheel === 'category'
      ? entry.wheelType === 'category'
      : entry.wheelType === 'prize' && entry.coinType === activeRouletteWheel)
    .filter(({ entry }) => `${entry.name} ${entry.prizeType} ${entry.rarity}`.toLowerCase().includes(rouletteSearch.trim().toLowerCase()))

  const visibleShopEntries = dashboard.shopCatalog
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => shopCategoryFilter === 'all' || entry.category === shopCategoryFilter)
    .filter(({ entry }) => `${entry.name} ${entry.category}`.toLowerCase().includes(shopSearch.trim().toLowerCase()))

  return (
    <section className="panel collection-panel account-panel admin-panel">
      <span className="panel-tag">Control del sitio</span>
      <h2>Administración</h2>
      {notice && <p className="guild-notice" role="status">{notice}</p>}
      {loading ? <p className="guild-loading">Cargando herramientas de administración...</p> : (
        <>
          <details className="admin-subpanel admin-role-panel">
            <summary>Gestión de rangos <span className="section-count">{userDirectory.length}</span></summary>
            <div className="admin-user-list">
              {userDirectory.map((entry) => (
                <div key={entry.id} className="admin-user-row">
                  <div><strong>{entry.username}</strong><span>{entry.guild}</span></div>
                  <select value={entry.roleLevel} disabled={Number(entry.id) === Number(user.id) || Number(entry.roleLevel) === 0} onChange={(event) => updateUserRole(entry.id, Number(event.target.value))} aria-label={`Cambiar rango de ${entry.username}`}>
                    {Object.entries(roleLabels).map(([value, label]) => <option key={value} value={value} disabled={value === '0'}>{label}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </details>
          {user.roleLevel === 1 && (
            <>
              <details className="admin-subpanel">
                <summary>Gestión de anuncios</summary>
                <div className="announcement-admin-list">
                  {dashboard.announcements.map((entry, index) => (
                    <article className="announcement-admin-row" key={entry.id}>
                      <label>Anuncio {index + 1}
                        <textarea rows={3} maxLength={500} value={entry.message} onChange={(event) => updateAnnouncement(entry.id, 'message', event.target.value)} />
                      </label>
                      <label className="announcement-image-controls">
                        {entry.imageData && <img src={entry.imageData} alt={`Vista previa del anuncio ${index + 1}`} />}
                        Imagen (PNG, JPEG, WebP o GIF)
                        <input type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={(event) => {
                          updateAnnouncementImage(entry.id, event.target.files?.[0])
                          event.target.value = ''
                        }} />
                        <small>Máximo 2 MB. La imagen se guarda con el anuncio.</small>
                        {entry.imageData && <button type="button" className="secondary-button" onClick={() => updateAnnouncement(entry.id, 'imageData', '')}>Quitar imagen</button>}
                      </label>
                      <button type="button" className="secondary-button" onClick={() => setDashboard((current) => ({ ...current, announcements: current.announcements.filter((item) => String(item.id) !== String(entry.id)) }))}>Eliminar anuncio</button>
                    </article>
                  ))}
                  <button type="button" className="secondary-button" onClick={() => setDashboard((current) => ({ ...current, announcements: [...current.announcements, { id: `draft-${Date.now()}`, message: '', imageData: '' }] }))}>Agregar anuncio</button>
                </div>
                <button type="button" className="primary-button" onClick={saveAnnouncements}>Guardar anuncios</button>
              </details>
              <details className="admin-subpanel">
                <summary>Catálogo de tienda</summary>
                <div className="shop-admin-add">
                  <label>Categoría
                    <select value={newShopEntry.category} onChange={(event) => setNewShopEntry({ category: event.target.value, catalogId: '', price: 50, quantity: event.target.value === 'pokemon' ? 1 : 10, shiny: false })}>
                      <option value="item">Objeto</option><option value="pokemon">Pokémon</option>
                    </select>
                  </label>
                  <label>Producto
                    <select value={newShopEntry.catalogId} onChange={(event) => setNewShopEntry((current) => ({ ...current, catalogId: event.target.value }))}>
                      <option value="">Selecciona un producto</option>
                      {(newShopEntry.category === 'item' ? itemCatalog : pokemonCatalog.filter((pokemon) => !pokemon.baseSpecies))
                        .filter((entry) => !dashboard.shopCatalog.some((shopEntry) => shopEntry.category === newShopEntry.category && shopEntry.name.toLowerCase() === entry.name.toLowerCase()))
                        .filter((entry) => entry.name.toLowerCase().includes(shopSearch.trim().toLowerCase()))
                        .map((entry) => <option key={entry.id} value={entry.id}>{entry.name}</option>)}
                    </select>
                  </label>
                  <label>Precio<input type="number" min="0" value={newShopEntry.price} onChange={(event) => setNewShopEntry((current) => ({ ...current, price: event.target.value }))} /></label>
                  <label>Existencias<input type="number" min="0" value={newShopEntry.quantity} onChange={(event) => setNewShopEntry((current) => ({ ...current, quantity: event.target.value }))} /></label>
                  {newShopEntry.category === 'pokemon' && <label className="shop-admin-enabled"><input type="checkbox" checked={newShopEntry.shiny} onChange={(event) => setNewShopEntry((current) => ({ ...current, shiny: event.target.checked }))} /> Variocolor</label>}
                  <button type="button" className="secondary-button" onClick={addShopEntry}>Agregar producto</button>
                </div>
                <div className="admin-list-filters">
                  <label>Buscar producto<input type="search" value={shopSearch} onChange={(event) => setShopSearch(event.target.value)} placeholder="Nombre del objeto o Pokémon" /></label>
                  <label>Filtrar categoría
                    <select value={shopCategoryFilter} onChange={(event) => setShopCategoryFilter(event.target.value)}>
                      <option value="all">Todas</option><option value="item">Objetos</option><option value="pokemon">Pokémon</option>
                    </select>
                  </label>
                </div>
                <div className="shop-admin-list">
                  {visibleShopEntries.map(({ entry, index }) => (
                    <div className="shop-admin-row" key={`${entry.category}:${entry.id}:${entry.name}`}>
                      <div className="shop-admin-product"><strong>{entry.name}</strong><small>{entry.category === 'pokemon' ? 'Pokémon' : 'Objeto'}</small></div>
                      <label>Precio<input type="number" min="0" value={entry.price} onChange={(event) => updateShopEntry(index, 'price', event.target.value)} /></label>
                      <label>Stock<input type="number" min="0" value={entry.quantity} onChange={(event) => updateShopEntry(index, 'quantity', event.target.value)} /></label>
                      <label className="shop-admin-enabled"><input type="checkbox" checked={Boolean(entry.enabled)} onChange={(event) => updateShopEntry(index, 'enabled', event.target.checked)} /> Visible</label>
                      {entry.category === 'pokemon' && <label className="shop-admin-enabled"><input type="checkbox" checked={Boolean(entry.shiny)} onChange={(event) => updateShopEntry(index, 'shiny', event.target.checked)} /> Variocolor</label>}
                      <button type="button" className="secondary-button" onClick={() => setDashboard((current) => ({ ...current, shopCatalog: current.shopCatalog.filter((_, entryIndex) => entryIndex !== index) }))}>Quitar</button>
                    </div>
                  ))}
                  {!dashboard.shopCatalog.length && <small>Aún no hay productos en la tienda.</small>}
                  {dashboard.shopCatalog.length > 0 && !visibleShopEntries.length && <small>No hay productos que coincidan con el filtro.</small>}
                </div>
                <button type="button" className="primary-button" onClick={saveShopCatalog}>Guardar catálogo y existencias</button>
              </details>
              <details className="admin-subpanel">
                <summary>Premios de la ruleta</summary>
                <div className="roulette-admin-tabs" role="tablist" aria-label="Apartados de la ruleta">
                  {rouletteWheels.map((wheel) => (
                    <button key={wheel.id} type="button" role="tab" aria-selected={activeRouletteWheel === wheel.id} className={activeRouletteWheel === wheel.id ? 'active' : ''} onClick={() => setActiveRouletteWheel(wheel.id)}>
                      {wheel.label}
                    </button>
                  ))}
                </div>
                <label className="admin-list-search">Buscar premio
                  <input type="search" value={rouletteSearch} onChange={(event) => setRouletteSearch(event.target.value)} placeholder="Nombre, tipo o rareza" />
                </label>
                <label className="admin-list-search">Buscar en el catálogo para seleccionar
                  <input type="search" value={rouletteCatalogSearch} onChange={(event) => setRouletteCatalogSearch(event.target.value)} placeholder="Escribe para filtrar nombres" />
                </label>
                <div className="roulette-admin-list">
                  {visibleRoulettePrizes.map(({ entry, index }) => {
                    if (entry.wheelType === 'category') {
                      return (
                        <div className="roulette-admin-row category-row" key={entry.id}>
                          <strong>{entry.prizeType === 'item' ? 'Objetos' : 'Pokémon'}</strong>
                          <label>Peso<input type="number" min="0.01" max="10000" step="0.01" value={entry.probability} onChange={(event) => updateRoulettePrize(index, 'probability', event.target.value)} /></label>
                          <label className="roulette-enabled">Activa<input type="checkbox" checked={Boolean(entry.enabled)} onChange={(event) => updateRoulettePrize(index, 'enabled', event.target.checked)} /></label>
                          <button type="button" className="secondary-button" onClick={() => removeRoulettePrize(index)}>Quitar</button>
                        </div>
                      )
                    }

                    const prizeOptions = entry.prizeType === 'pokemon'
                      ? pokemonCatalog.filter((pokemon) => !pokemon.baseSpecies)
                      : itemCatalog
                    const hasMatchingPrize = prizeOptions.some((option) => option.name === entry.name)
                    return (
                      <div className="roulette-admin-row" key={entry.id}>
                        <label>Premio
                          <select value={entry.name} onChange={(event) => updateRoulettePrize(index, 'name', event.target.value)}>
                            <option value="">Selecciona un premio</option>
                            {entry.name && !hasMatchingPrize && <option value={entry.name}>{entry.name} (actual)</option>}
                            {prizeOptions
                              .filter((option) => option.name.toLowerCase().includes(rouletteCatalogSearch.trim().toLowerCase()) || option.name === entry.name)
                              .map((option) => <option key={option.id} value={option.name}>{option.name}</option>)}
                          </select>
                        </label>
                        <label>Tipo
                          <select value={entry.prizeType} onChange={(event) => {
                            updateRoulettePrize(index, 'prizeType', event.target.value)
                            updateRoulettePrize(index, 'name', '')
                          }}>
                            <option value="item">Objeto</option><option value="pokemon">Pokémon</option>
                          </select>
                        </label>
                        <label>Cantidad<input type="number" min="1" max="99" value={entry.amount} onChange={(event) => updateRoulettePrize(index, 'amount', event.target.value)} /></label>
                        <label>Peso<input type="number" min="0.01" max="10000" step="0.01" value={entry.probability} onChange={(event) => updateRoulettePrize(index, 'probability', event.target.value)} /></label>
                        <label>Rareza<input value={entry.rarity} onChange={(event) => updateRoulettePrize(index, 'rarity', event.target.value)} /></label>
                        <label className="roulette-enabled">Activa<input type="checkbox" checked={Boolean(entry.enabled)} onChange={(event) => updateRoulettePrize(index, 'enabled', event.target.checked)} /></label>
                        <button type="button" className="secondary-button" onClick={() => removeRoulettePrize(index)}>Quitar</button>
                      </div>
                    )
                  })}
                  {!visibleRoulettePrizes.length && <small>No hay premios que coincidan con el filtro.</small>}
                </div>
                <div className="roulette-admin-add">
                  <button type="button" className="secondary-button" onClick={() => addRoulettePrize('item')}>Agregar objeto</button>
                  <button type="button" className="secondary-button" onClick={() => addRoulettePrize('pokemon')}>Agregar Pokémon</button>
                </div>
                <button type="button" className="primary-button" onClick={saveRoulette}>Guardar premios</button>
              </details>
              <details className="admin-subpanel">
                <summary>Sanciones</summary>
                <label>Usuario
                  <select value={sanctionForm.userId} onChange={(event) => setSanctionForm((current) => ({ ...current, userId: event.target.value }))}>
                    <option value="">Selecciona un usuario</option>
                    {userDirectory.map((entry) => <option key={entry.id} value={entry.id}>{entry.username}</option>)}
                  </select>
                </label>
                <label>Tipo
                  <select value={sanctionForm.sanctionType} onChange={(event) => setSanctionForm((current) => ({ ...current, sanctionType: event.target.value }))}>
                    {Object.entries(sanctionLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                  </select>
                </label>
                <label>Motivo
                  <textarea rows={3} maxLength={500} value={sanctionForm.reason} onChange={(event) => setSanctionForm((current) => ({ ...current, reason: event.target.value }))} />
                </label>
                <button type="button" className="primary-button" onClick={saveSanction}>Guardar sanción</button>
                <div className="admin-user-list">
                  {dashboard.sanctions.map((sanction) => (
                    <article className="admin-user-row" key={sanction.id}>
                      <div>
                        <strong>{sanction.username} · {sanctionLabels[sanction.sanctionType] || sanction.sanctionType}</strong>
                        <span>{sanction.reason}</span>
                        <small>{sanction.createdAt}</small>
                      </div>
                    </article>
                  ))}
                  {!dashboard.sanctions.length && <small>No hay sanciones registradas.</small>}
                </div>
                <details className="admin-subpanel account-deletion-panel">
                  <summary>Supresión de cuenta</summary>
                  <p className="account-deletion-warning">
                    Revisa las solicitudes de los usuarios. La supresión es permanente y elimina su perfil, Pokémon, objetos, monedas, sanciones, combates y mensajes de la base activa; las copias externas pueden tener otro periodo de retención.
                  </p>
                  <div className="account-deletion-request-list">
                    <h3>Solicitudes recibidas</h3>
                    {dashboard.accountDeletionRequests.map((request) => (
                      <article className="admin-user-row account-deletion-request" key={request.id}>
                        <div>
                          <strong>{request.username} · Gremio: {request.guild}</strong>
                          <span>Motivo: {request.reason}</span>
                          <small>Solicitud: {request.createdAt}</small>
                        </div>
                        <button
                          type="button"
                          className="secondary-button"
                          onClick={() => setAccountDeletion({ userId: String(request.userId), confirmation: '' })}
                        >
                          Seleccionar para suprimir
                        </button>
                      </article>
                    ))}
                    {!dashboard.accountDeletionRequests.length && <small>No hay solicitudes pendientes.</small>}
                  </div>
                  <label>Cuenta
                    <select value={accountDeletion.userId} onChange={(event) => setAccountDeletion({ userId: event.target.value, confirmation: '' })}>
                      <option value="">Selecciona una cuenta</option>
                      {userDirectory
                        .filter((entry) => Number(entry.id) !== Number(user.id) && Number(entry.roleLevel) !== 0 && Number(entry.roleLevel) !== 1)
                        .map((entry) => <option key={entry.id} value={entry.id}>{entry.username}</option>)}
                    </select>
                  </label>
                  {accountDeletion.userId && (
                    <label>Escribe el nombre exacto de la cuenta para confirmar
                      <input
                        type="text"
                        autoComplete="off"
                        value={accountDeletion.confirmation}
                        onChange={(event) => setAccountDeletion((current) => ({ ...current, confirmation: event.target.value }))}
                      />
                    </label>
                  )}
                  <button
                    type="button"
                    className="danger-button"
                    disabled={!accountDeletion.userId || accountDeletion.confirmation !== userDirectory.find((entry) => Number(entry.id) === Number(accountDeletion.userId))?.username}
                    onClick={deleteAccount}
                  >
                    Suprimir cuenta y todos sus datos
                  </button>
                  <small>Las cuentas de sistema y de administración, incluida la tuya, están protegidas en este módulo.</small>
                </details>
              </details>
            </>
          )}
        </>
      )}
    </section>
  )
}
