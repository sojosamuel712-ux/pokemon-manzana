import { useEffect, useState } from 'react'
import { apiClient } from '../../lib/apiClient'

const roleLevelLabels = {
  0: 'Tester del sistema',
  1: 'Admin',
  2: 'Líder de gremio',
  3: 'Alto Mando',
  4: 'Usuario normal',
}

export function AccountPanel({ user, onLogout, audioVolume, setAudioVolume }) {
  const [deletionRequest, setDeletionRequest] = useState(null)
  const [deletionReason, setDeletionReason] = useState('')
  const [confirmingDeletion, setConfirmingDeletion] = useState(false)
  const [deletionNotice, setDeletionNotice] = useState('')
  const [loadingDeletionRequest, setLoadingDeletionRequest] = useState(apiClient.isConfigured())

  useEffect(() => {
    if (!apiClient.isConfigured()) return undefined
    let active = true
    apiClient.getAccountDeletionRequest()
      .then(({ request }) => {
        if (active) setDeletionRequest(request)
      })
      .catch((error) => {
        if (active) setDeletionNotice(error.message)
      })
      .finally(() => {
        if (active) setLoadingDeletionRequest(false)
      })
    return () => { active = false }
  }, [])

  const submitDeletionRequest = async (event) => {
    event.preventDefault()
    try {
      const result = await apiClient.requestAccountDeletion(deletionReason)
      setDeletionRequest(result.request)
      setDeletionReason('')
      setConfirmingDeletion(false)
      setDeletionNotice('Tu solicitud de supresión ha sido enviada a la administración.')
    } catch (error) {
      setDeletionNotice(error.message)
    }
  }

  return (
    <section className="panel collection-panel account-panel">
      <span className="panel-tag">Datos de entrenador</span>
      <h2>Cuenta</h2>
      <div className="account-list">
        <div><span>Nombre</span><strong>{user.username}</strong></div>
        <div><span>Gremio</span><strong>{user.guild}</strong></div>
        <div><span>Edad</span><strong>{user.age ?? 'Sin registro'}</strong></div>
        <div><span>Rango</span><strong>{roleLevelLabels[user.roleLevel ?? 4]}</strong></div>
        <div><span>Pokémon inicial</span><strong>{user.starter}</strong></div>
        <div><span>Bayas</span><strong>{user.bayas}</strong></div>
        <div><span>Victorias</span><strong>{user.battleWins}</strong></div>
        <div><span>Derrotas</span><strong>{user.battleLosses}</strong></div>
      </div>
      <div className="account-audio-control">
        <label htmlFor="account-audio-volume">
          <span>Volumen de los gritos en combate</span>
          <output htmlFor="account-audio-volume">{audioVolume}%</output>
        </label>
        <input
          id="account-audio-volume"
          type="range"
          min="0"
          max="100"
          step="5"
          value={audioVolume}
          onChange={(event) => setAudioVolume(Number(event.target.value))}
          aria-valuetext={`${audioVolume}%`}
        />
        <div><span>Silencio</span><span>Máximo</span></div>
        <small>La configuración se guarda en este navegador para tu cuenta.</small>
      </div>
      <div className="account-deletion">
        <h3>Supresión de cuenta</h3>
        <p>La administración revisará tu solicitud y, si procede, eliminará la cuenta y sus datos asociados.</p>
        {deletionNotice && <p className="account-deletion-notice" role="status">{deletionNotice}</p>}
        {loadingDeletionRequest && <p role="status">Comprobando solicitudes pendientes...</p>}
        {!loadingDeletionRequest && deletionRequest && (
          <div className="account-deletion-pending">
            <strong>Solicitud enviada</strong>
            <span>Enviada: {deletionRequest.createdAt}</span>
            <span>Motivo: {deletionRequest.reason}</span>
          </div>
        )}
        {!loadingDeletionRequest && !deletionRequest && !confirmingDeletion && (
          <>
            <button type="button" className="danger-button" disabled={!apiClient.isConfigured()} onClick={() => setConfirmingDeletion(true)}>
              Eliminar cuenta
            </button>
            {!apiClient.isConfigured() && <small>Conéctate al servidor para enviar una solicitud de supresión.</small>}
          </>
        )}
        {!loadingDeletionRequest && confirmingDeletion && (
          <form className="account-deletion-form" onSubmit={submitDeletionRequest}>
            <p className="account-deletion-warning">Al confirmar, enviarás una solicitud a la administración. La cuenta no se eliminará hasta que un administrador la revise.</p>
            <label htmlFor="account-deletion-reason">Motivo de supresión
              <textarea
                id="account-deletion-reason"
                rows={3}
                maxLength={500}
                required
                value={deletionReason}
                onChange={(event) => setDeletionReason(event.target.value)}
              />
            </label>
            <div className="account-deletion-actions">
              <button type="submit" className="danger-button" disabled={!deletionReason.trim()}>Sí, enviar solicitud</button>
              <button type="button" className="secondary-button" onClick={() => {
                setConfirmingDeletion(false)
                setDeletionReason('')
                setDeletionNotice('')
              }}>No, cancelar</button>
            </div>
          </form>
        )}
      </div>
      <br />
      <button type="button" className="secondary-button" onClick={onLogout}>Cerrar sesión</button>
    </section>
  )
}
