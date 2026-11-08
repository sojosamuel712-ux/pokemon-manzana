import { useState } from 'react'

export function LoginForm({ onLogin }) {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    
    try {
      await onLogin(loginForm.username, loginForm.password)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <label>
        Usuario
        <input
          type="text"
          value={loginForm.username}
          onChange={(event) => setLoginForm((current) => ({ ...current, username: event.target.value }))}
          placeholder="Tu nombre de entrenador"
        />
      </label>
      <label>
        Contraseña
        <input
          type="password"
          value={loginForm.password}
          onChange={(event) => setLoginForm((current) => ({ ...current, password: event.target.value }))}
          placeholder="••••••••"
        />
      </label>
      {error && <p className="auth-form-error" role="alert">{error}</p>}
      <button type="submit" className="primary-button">
        Entrar a la comunidad
      </button>
      <small>Comunidad Manzana º Fan Community</small>
    </form>
  )
}
