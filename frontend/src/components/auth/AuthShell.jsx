import { useState } from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { useAuth } from '../../context/useAuth'

export function AuthShell() {
  const [authMode, setAuthMode] = useState(() =>
    new URLSearchParams(window.location.search).has('registro') ? 'register' : 'login',
  )
  const { handleLogin, handleRegister } = useAuth()

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-header">
          <span className="pill">Version 1.1.0</span>
          <h1>Pokémon Manzana</h1>
          <p>Sitio creado por y para la comunidad de entrenadores.</p>
        </div>

        <div className="auth-tabs">
          <button
            type="button"
            className={authMode === 'login' ? 'active' : ''}
            onClick={() => setAuthMode('login')}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            className={authMode === 'register' ? 'active' : ''}
            onClick={() => setAuthMode('register')}
          >
            Registro
          </button>
        </div>

        {authMode === 'login' ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <RegisterForm onRegister={handleRegister} />
        )}
      </div>
    </div>
  )
}
