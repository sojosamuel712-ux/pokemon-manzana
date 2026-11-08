import { useEffect, useState } from 'react'
import {
  calculatePokemonStat,
  flattenPokemonRoster,
  getPokemonGenderOptions,
  getPokemonNatureDescription,
  getTotalPokemonEvs,
  MAX_TOTAL_EVS,
  normalizePokemonRoster,
  pokemonNatures,
  pokemonStats,
} from '../../lib/pokemonRoster'
import { getMoveById, getMovesByPokemonId, moveCategoryNames, moveTypeNames, moveTypes } from '../../data/moveCatalog'
import { getPokemonEvolutionOptions } from '../../lib/pokemonEvolution'
import { apiClient } from '../../lib/apiClient'
import { localDb } from '../../lib/localDb'
import { PokemonSprite } from '../shared'
import { getCatalogPokemon } from '../../lib/pokemonUtils'

export function TeamPanel({ user, setRemoteUser, setDbState, setActiveSection }) {
  const [activeBox, setActiveBox] = useState('team')
  const [selectedPokemonId, setSelectedPokemonId] = useState(null)
  const [pokemonDraft, setPokemonDraft] = useState(null)
  const [notice, setNotice] = useState('')
  const [saving, setSaving] = useState(false)
  const [evolvingPokemonId, setEvolvingPokemonId] = useState(null)
  const [moveCatalogState, setMoveCatalogState] = useState({ pokemonId: null, groups: [], error: '' })

  const roster = normalizePokemonRoster(user)
  const visiblePokemon = activeBox === 'team' ? roster.team : roster.pc
  const selectedPokemon = [...roster.team, ...roster.pc].find(
    (pokemon) => pokemon.instanceId === selectedPokemonId,
  )
  const pokemonDetails = selectedPokemon && pokemonDraft?.instanceId === selectedPokemon.instanceId
    ? pokemonDraft
    : selectedPokemon
  const catalogPokemon = getCatalogPokemon(pokemonDetails?.species)
  const catalogPokemonId = catalogPokemon?.id
  const genderOptions = getPokemonGenderOptions(pokemonDetails?.species)
  const evolutionOptions = getPokemonEvolutionOptions(catalogPokemon, user.inventory?.items || [])
  const moveGroups = moveCatalogState.pokemonId === catalogPokemonId ? moveCatalogState.groups : []
  const loadingMoves = Boolean(catalogPokemonId) && moveCatalogState.pokemonId !== catalogPokemonId
  const moveCatalogError = moveCatalogState.pokemonId === catalogPokemonId ? moveCatalogState.error : ''

  useEffect(() => {
    let active = true
    if (!catalogPokemonId) return () => { active = false }

    getMovesByPokemonId(catalogPokemonId)
      .then((moves) => {
        if (!active) return
        setMoveCatalogState({
          pokemonId: catalogPokemonId,
          groups: moveTypes
            .map((type) => ({ type, moves: moves.filter((move) => move.type === type) }))
            .filter((group) => group.moves.length),
          error: '',
        })
      })
      .catch((error) => {
        if (active) setMoveCatalogState({ pokemonId: catalogPokemonId, groups: [], error: error.message })
      })

    return () => { active = false }
  }, [catalogPokemonId])

  const persistRoster = async (nextRoster) => {
    const normalizedRoster = normalizePokemonRoster({ ...user, pokemonRoster: nextRoster })
    if (apiClient.isConfigured()) {
      const result = await apiClient.savePokemonRoster(normalizedRoster)
      setRemoteUser({
        ...result.user,
        pokemonRoster: normalizedRoster,
        inventory: {
          ...result.user.inventory,
          pokemon: flattenPokemonRoster(normalizedRoster),
        },
      })
      return
    }

    const nextUser = {
      ...user,
      pokemonRoster: normalizedRoster,
      inventory: {
        ...user.inventory,
        pokemon: flattenPokemonRoster(normalizedRoster),
      },
    }
    setRemoteUser(nextUser)
    setDbState((current) => {
      const updated = {
        ...current,
        users: current.users.some((entry) => entry.username.toLowerCase() === nextUser.username.toLowerCase())
          ? current.users.map((entry) => entry.username.toLowerCase() === nextUser.username.toLowerCase() ? nextUser : entry)
          : [nextUser, ...current.users],
      }
      localDb.write(updated)
      return updated
    })
  }

  const selectPokemon = (pokemon) => {
    setSelectedPokemonId(pokemon.instanceId)
    setPokemonDraft({
      ...pokemon,
      ivs: { ...pokemon.ivs },
      evs: { ...pokemon.evs },
      moves: [...pokemon.moves],
    })
    setNotice('')
  }

  const updateDraft = (field, value) => {
    setPokemonDraft((current) => current && { ...current, [field]: value })
  }

  const updateStat = (group, stat, value) => {
    setPokemonDraft((current) => {
      if (!current) return current
      if (group === 'evs') {
        const otherEvs = pokemonStats.reduce((total, entry) => total + (entry.id === stat ? 0 : current.evs[entry.id]), 0)
        const available = Math.max(0, Math.min(252, MAX_TOTAL_EVS - otherEvs))
        const requested = Number(value)
        return {
          ...current,
          evs: { ...current.evs, [stat]: Math.max(0, Math.min(available, Math.floor(Number.isFinite(requested) ? requested : 0))) },
        }
      }
      return { ...current, [group]: { ...current[group], [stat]: Number(value) } }
    })
  }

  const updateMove = (index, move) => {
    setPokemonDraft((current) => current && ({
      ...current,
      moves: Array.from({ length: 4 }, (_, moveIndex) =>
        moveIndex === index ? move : current.moves[moveIndex] || '',
      ),
    }))
  }

  const movePokemon = async (pokemon, targetBox) => {
    const sourceBox = roster.team.some((entry) => entry.instanceId === pokemon.instanceId) ? 'team' : 'pc'
    if (sourceBox === targetBox) return
    if (targetBox === 'team' && roster.team.length >= 6) {
      setNotice('El equipo ya tiene seis Pokémon. Mueve uno al PC antes de añadir otro.')
      return
    }

    const pokemonToMove = pokemonDraft?.instanceId === pokemon.instanceId ? pokemonDraft : pokemon
    const nextRoster = {
      team: targetBox === 'team'
        ? [...roster.team.filter((entry) => entry.instanceId !== pokemon.instanceId), pokemonToMove]
        : roster.team.filter((entry) => entry.instanceId !== pokemon.instanceId),
      pc: targetBox === 'pc'
        ? [...roster.pc.filter((entry) => entry.instanceId !== pokemon.instanceId), pokemonToMove]
        : roster.pc.filter((entry) => entry.instanceId !== pokemon.instanceId),
    }
    try {
      await persistRoster(nextRoster)
      setActiveBox(targetBox)
      setNotice(`${pokemonToMove.nickname || pokemonToMove.species} se movió al ${targetBox === 'pc' ? 'PC' : 'equipo'}.`)
    } catch (error) {
      setNotice(`No se pudo guardar el cambio: ${error.message}`)
    }
  }

  const saveConfiguration = async (event) => {
    event.preventDefault()
    if (!pokemonDraft || saving) return
    const hasInvalidStats = pokemonStats.some(({ id }) =>
      !Number.isInteger(pokemonDraft.ivs[id]) || pokemonDraft.ivs[id] < 0 || pokemonDraft.ivs[id] > 31 ||
      !Number.isInteger(pokemonDraft.evs[id]) || pokemonDraft.evs[id] < 0 || pokemonDraft.evs[id] > 252,
    )
    if (hasInvalidStats || getTotalPokemonEvs(pokemonDraft.evs) > MAX_TOTAL_EVS) {
      setNotice(`Revisa IVs (0-31) y EVs (0-252; máximo ${MAX_TOTAL_EVS} en total).`)
      return
    }

    const savedPokemon = { ...pokemonDraft, nickname: pokemonDraft.nickname.trim() }
    setSaving(true)
    try {
      await persistRoster({
        team: roster.team.map((pokemon) => pokemon.instanceId === savedPokemon.instanceId ? savedPokemon : pokemon),
        pc: roster.pc.map((pokemon) => pokemon.instanceId === savedPokemon.instanceId ? savedPokemon : pokemon),
      })
      setPokemonDraft(savedPokemon)
      setNotice(apiClient.isConfigured() ? 'Configuración guardada en tu cuenta.' : 'Configuración guardada en este dispositivo.')
    } catch (error) {
      setNotice(`No se pudo guardar la configuración: ${error.message}`)
    } finally {
      setSaving(false)
    }
  }

  const evolvePokemon = async (option) => {
    if (!pokemonDetails || evolvingPokemonId || saving) return
    if (user.bayas < option.cost) {
      setNotice(`Necesitas ${option.cost} bayas para evolucionar a ${option.target.name}.`)
      return
    }
    if (option.requiredItem && !option.ownedItem) {
      setNotice(`Necesitas ${option.requiredItem} para evolucionar a ${option.target.name}.`)
      return
    }

    const pokemonToEvolve = pokemonDraft?.instanceId === pokemonDetails.instanceId ? pokemonDraft : pokemonDetails
    const rosterWithDraft = {
      team: roster.team.map((pokemon) => pokemon.instanceId === pokemonToEvolve.instanceId ? pokemonToEvolve : pokemon),
      pc: roster.pc.map((pokemon) => pokemon.instanceId === pokemonToEvolve.instanceId ? pokemonToEvolve : pokemon),
    }
    setEvolvingPokemonId(pokemonToEvolve.instanceId)
    try {
      if (apiClient.isConfigured()) {
        await apiClient.savePokemonRoster(rosterWithDraft)
        const result = await apiClient.evolvePokemon(pokemonToEvolve.instanceId, option.target.name)
        setRemoteUser(result.user)
        const updatedPokemon = [...result.user.pokemonRoster.team, ...result.user.pokemonRoster.pc]
          .find((pokemon) => pokemon.instanceId === pokemonToEvolve.instanceId)
        setPokemonDraft(updatedPokemon || null)
      } else {
        const items = [...(user.inventory?.items || [])]
        if (option.ownedItem) items.splice(items.indexOf(option.ownedItem), 1)
        const evolvedPokemon = {
          ...pokemonToEvolve,
          species: option.target.name,
          ability: option.target.abilities?.[0] || pokemonToEvolve.ability,
        }
        const evolvedRoster = {
          team: rosterWithDraft.team.map((pokemon) => pokemon.instanceId === evolvedPokemon.instanceId ? evolvedPokemon : pokemon),
          pc: rosterWithDraft.pc.map((pokemon) => pokemon.instanceId === evolvedPokemon.instanceId ? evolvedPokemon : pokemon),
        }
        const nextUser = {
          ...user,
          bayas: user.bayas - option.cost,
          pokemonRoster: evolvedRoster,
          inventory: { ...user.inventory, items, pokemon: flattenPokemonRoster(evolvedRoster) },
        }
        setRemoteUser(nextUser)
        setDbState((current) => {
          const updated = {
            ...current,
            users: current.users.map((entry) => entry.username.toLowerCase() === nextUser.username.toLowerCase() ? nextUser : entry),
          }
          localDb.write(updated)
          return updated
        })
        setPokemonDraft(evolvedPokemon)
      }
      setNotice(option.requiredItem
        ? `${pokemonToEvolve.nickname || pokemonToEvolve.species} evolucionó a ${option.target.name} usando ${option.ownedItem}.`
        : `${pokemonToEvolve.nickname || pokemonToEvolve.species} evolucionó a ${option.target.name} por ${option.cost} bayas.`)
    } catch (error) {
      setNotice(`No se pudo completar la evolución: ${error.message}`)
    } finally {
      setEvolvingPokemonId(null)
    }
  }

  return (
    <section className="panel collection-panel pokemon-roster-panel">
      <div className="section-heading">
        <div><span className="panel-tag">Gestión de Pokémon</span><h2>Equipo Pokémon</h2></div>
        <span className="section-count">{roster.team.length} / 6 en el equipo</span>
      </div>
      <div className="pokemon-box-tabs" role="tablist" aria-label="Equipo y PC">
        <button type="button" role="tab" aria-selected={activeBox === 'team'} className={activeBox === 'team' ? 'active' : ''} onClick={() => { setActiveBox('team'); setNotice('') }}>
          Equipo <span>{roster.team.length}/6</span>
        </button>
        <button type="button" role="tab" aria-selected={activeBox === 'pc'} className={activeBox === 'pc' ? 'active' : ''} onClick={() => { setActiveBox('pc'); setNotice('') }}>
          PC <span>{roster.pc.length}</span>
        </button>
      </div>
      <div className="pokemon-storage-layout">
        <div className="pokemon-storage-column">
          <div className="storage-heading">
            <div><span>{activeBox === 'team' ? 'En combate' : 'Almacenamiento'}</span><strong>{activeBox === 'team' ? 'Equipo activo' : 'Caja del PC'}</strong></div>
            <span>{activeBox === 'team' ? `${roster.team.length} / 6` : `${roster.pc.length} Pokémon`}</span>
          </div>
          {notice && <p className="pokemon-notice" role="status">{notice}</p>}
          {visiblePokemon.length ? (
            <div className="roster-grid">
              {visiblePokemon.map((pokemon, index) => {
                const entryPokemon = getCatalogPokemon(pokemon.species)
                const targetBox = activeBox === 'team' ? 'pc' : 'team'
                const teamFull = targetBox === 'team' && roster.team.length >= 6
                return (
                  <article className="roster-card" key={pokemon.instanceId}>
                    <button type="button" className={selectedPokemonId === pokemon.instanceId ? 'roster-card-main selected' : 'roster-card-main'} aria-pressed={selectedPokemonId === pokemon.instanceId} disabled={Boolean(evolvingPokemonId)} onClick={() => selectPokemon(pokemon)}>
                      <span className="roster-sprite"><PokemonSprite pokemon={entryPokemon} shiny={pokemon.shiny} alt="" /></span>
                      <span className="roster-card-copy">
                        <span className="roster-order">{activeBox === 'team' ? `Equipo ${String(index + 1).padStart(2, '0')}` : 'Almacenado'}</span>
                        <strong>{pokemon.nickname || pokemon.species}</strong>
                        {pokemon.nickname && <small>{pokemon.species}</small>}
                        <span className="roster-types">{entryPokemon?.types.join(' / ') || 'Tipo desconocido'}</span>
                      </span>
                    </button>
                    <button type="button" className="roster-transfer" aria-label={`Mover ${pokemon.nickname || pokemon.species} ${targetBox === 'pc' ? 'al PC' : 'al equipo'}`} disabled={teamFull || Boolean(evolvingPokemonId) || saving} onClick={() => movePokemon(pokemon, targetBox)}>
                      {targetBox === 'pc' ? 'Pasar al PC' : 'Añadir al equipo'}
                    </button>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="storage-empty">
              <span aria-hidden="true">◈</span>
              <strong>{activeBox === 'team' ? 'Tu equipo está vacío' : 'Aún no hay Pokémon en el PC'}</strong>
              <p>{activeBox === 'team' ? 'Elige un Pokémon del PC para formar tu equipo.' : 'Los Pokémon que compres se guardarán aquí.'}</p>
              <button type="button" className="secondary-button" onClick={() => activeBox === 'team' ? setActiveBox('pc') : setActiveSection('shop')}>
                {activeBox === 'team' ? 'Abrir PC' : 'Visitar tienda'}
              </button>
            </div>
          )}
        </div>
        <aside className="pokemon-detail-panel" aria-live="polite">
          {pokemonDetails ? (
            <>
              <div className="pokemon-detail-heading">
                <span className="detail-sprite"><PokemonSprite pokemon={catalogPokemon} shiny={pokemonDetails.shiny} alt={pokemonDetails.species} /></span>
                <div>
                  <span className="panel-tag">Ficha Pokémon</span>
                  <h3>{pokemonDetails.nickname || pokemonDetails.species}</h3>
                  <p>{pokemonDetails.species}</p>
                  <div className="detail-types">{(catalogPokemon?.types || []).map((type) => <span key={type}>{type}</span>)}</div>
                </div>
              </div>
              {evolutionOptions.length > 0 && (
                <section className="pokemon-evolution-section" aria-label="Evoluciones disponibles">
                  <div className="pokemon-evolution-heading"><h4>Evolución</h4><span>{user.bayas} bayas disponibles</span></div>
                  <p>Las evoluciones que solo requieren un objeto no cuestan bayas y lo consumen. Las evoluciones con otros requisitos se hacen pagando bayas.</p>
                  <div className="pokemon-evolution-options">
                    {evolutionOptions.map((option) => {
                      const missingItem = Boolean(option.requiredItem && !option.ownedItem)
                      const notEnoughBerries = user.bayas < option.cost
                      const isEvolving = evolvingPokemonId === pokemonDetails.instanceId
                      return (
                        <div className="pokemon-evolution-option" key={option.target.id}>
                          <div>
                            <strong>{option.target.name}</strong>
                            {option.requiredItem
                              ? <><span>Solo requiere objeto</span><small>{option.ownedItem ? `Se usará ${option.ownedItem}` : `Necesitas ${option.requiredItem}`}</small></>
                              : <><span>{option.cost} bayas</span>{option.requirement && <small>Requisito habitual: {option.requirement} (se omite con bayas)</small>}</>}
                          </div>
                          <button type="button" disabled={missingItem || notEnoughBerries || Boolean(evolvingPokemonId) || saving} onClick={() => evolvePokemon(option)}>
                            {isEvolving ? 'Evolucionando...' : missingItem ? 'Falta objeto' : notEnoughBerries ? 'Faltan bayas' : 'Evolucionar'}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </section>
              )}
              <form className="pokemon-config-form" onSubmit={saveConfiguration}>
                <div className="pokemon-config-fields">
                  <label>Mote<input maxLength={16} value={pokemonDetails.nickname} onChange={(event) => updateDraft('nickname', event.target.value)} placeholder="Sin mote" /></label>
                  <label>Objeto equipado
                    <select value={pokemonDetails.heldItem} onChange={(event) => updateDraft('heldItem', event.target.value)}>
                      <option value="">Sin objeto</option>
                      {(user.inventory?.items || []).map((item) => <option key={item} value={item}>{item}</option>)}
                      {pokemonDetails.heldItem && !(user.inventory?.items || []).includes(pokemonDetails.heldItem) && <option value={pokemonDetails.heldItem}>{pokemonDetails.heldItem}</option>}
                    </select>
                  </label>
                  {genderOptions.length > 0 && (
                    <label>Género
                      <select value={pokemonDetails.gender || ''} onChange={(event) => updateDraft('gender', event.target.value)}>
                        <option value="">Aleatorio</option>
                        <option value="M">Macho</option>
                        <option value="F">Hembra</option>
                      </select>
                    </label>
                  )}
                  <label>Naturaleza
                    <select value={pokemonDetails.nature} onChange={(event) => updateDraft('nature', event.target.value)}>{pokemonNatures.map((nature) => <option key={nature} value={nature}>{nature}</option>)}</select>
                    <span className="pokemon-nature-effect" aria-live="polite">{getPokemonNatureDescription(pokemonDetails.nature)}</span>
                  </label>
                  <label>Nivel<input type="number" min="1" max="100" step="1" value={pokemonDetails.level} onChange={(event) => updateDraft('level', Number(event.target.value))} /></label>
                  <label>Habilidad
                    <select value={pokemonDetails.ability} onChange={(event) => updateDraft('ability', event.target.value)}>{(catalogPokemon?.abilities || []).map((ability) => <option key={ability} value={ability}>{ability}</option>)}</select>
                  </label>
                </div>
                <div className="pokemon-moves-section">
                  <h4>Movimientos</h4>
                  {loadingMoves && <p role="status">Cargando movimientos...</p>}
                  {moveCatalogError && <p role="alert">No se pudieron cargar los movimientos: {moveCatalogError}</p>}
                  <div className="pokemon-moves-grid">
                    {Array.from({ length: 4 }, (_, index) => {
                      const selectedMove = getMoveById(pokemonDetails.moves[index])
                      return (
                        <label key={index}>Movimiento {index + 1}
                          <select value={pokemonDetails.moves[index] || ''} onChange={(event) => updateMove(index, event.target.value)}>
                            <option value="">Sin movimiento</option>
                            {moveGroups.map((group) => <optgroup key={group.type} label={moveTypeNames[group.type]}>{group.moves.map((move) => <option key={move.id} value={move.id}>{move.name}</option>)}</optgroup>)}
                          </select>
                          {selectedMove && <span className="pokemon-move-description"><strong>{moveCategoryNames[selectedMove.category]} · {moveTypeNames[selectedMove.type]}{selectedMove.category === 'Status' ? ' · Sin potencia' : ` · Potencia ${selectedMove.dynamicBasePower ? 'variable' : selectedMove.basePower}`}</strong><span>{selectedMove.description}</span></span>}
                        </label>
                      )
                    })}
                  </div>
                </div>
                <div className="pokemon-stats-section">
                  <h4>Estadísticas · Nv. {pokemonDetails.level}</h4>
                  <div className="pokemon-stat-table">
                    <div className="pokemon-stat-row stat-header"><span>Stat</span><span>Base</span><span>IV</span><span>EV</span><span>Final</span></div>
                    {pokemonStats.map((stat) => (
                      <div className="pokemon-stat-row" key={stat.id}>
                        <span>{stat.label}</span>
                        <strong>{catalogPokemon?.baseStats?.[stat.id] ?? '—'}</strong>
                        <input type="number" min="0" max="31" step="1" aria-label={`${stat.label} IV`} value={pokemonDetails.ivs[stat.id]} onChange={(event) => updateStat('ivs', stat.id, event.target.value)} />
                        <input type="number" min="0" max={Math.max(0, Math.min(252, MAX_TOTAL_EVS - getTotalPokemonEvs({ ...pokemonDetails.evs, [stat.id]: 0 })))} step="1" aria-label={`${stat.label} EV`} value={pokemonDetails.evs[stat.id]} onChange={(event) => updateStat('evs', stat.id, event.target.value)} />
                        <strong>{calculatePokemonStat({ baseStat: catalogPokemon?.baseStats?.[stat.id], statId: stat.id, iv: pokemonDetails.ivs[stat.id], ev: pokemonDetails.evs[stat.id], level: pokemonDetails.level, nature: pokemonDetails.nature }) ?? '—'}</strong>
                      </div>
                    ))}
                    <p className="ev-guidance">IV: 0–31 por stat. EV: 0–252 por stat. Total: {getTotalPokemonEvs(pokemonDetails.evs)}/{MAX_TOTAL_EVS}.</p>
                  </div>
                </div>
                <button type="submit" className="primary-button save-pokemon-button" disabled={saving || Boolean(evolvingPokemonId)}>{saving ? 'Guardando...' : 'Guardar configuración'}</button>
              </form>
            </>
          ) : (
            <div className="pokemon-detail-empty"><span aria-hidden="true">◈</span><h3>Detalles del Pokémon</h3><p>Selecciona un Pokémon para consultar y editar su configuración.</p></div>
          )}
        </aside>
      </div>
    </section>
  )
}
