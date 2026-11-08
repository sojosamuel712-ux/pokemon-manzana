import { useState, useEffect, useCallback } from 'react'
import { apiClient } from '../lib/apiClient'
import { localDb } from '../lib/localDb'
import { normalizePokemonRoster, syncPokemonRosterWithInventory } from '../lib/pokemonRoster'
import { AuthContext } from './authContext'

export function AuthProvider({ children }) {
  const [isSessionRestoring, setIsSessionRestoring] = useState(() => apiClient.isConfigured())
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  const setRemoteUser = useCallback((nextUser) => {
    const storedUser = localDb.getUser(nextUser.username)
    const rosterSource = nextUser.pokemonRoster || storedUser?.pokemonRoster
    const pokemonRoster = syncPokemonRosterWithInventory(
      normalizePokemonRoster({ ...nextUser, pokemonRoster: rosterSource }),
      nextUser.inventory?.pokemon,
    )
    const userWithRoster = {
      ...nextUser,
      pokemonRoster,
    }
    setUser(userWithRoster)
  }, [])

  const persistUser = useCallback((nextUser) => {
    setUser(nextUser)
  }, [])

  const handleLogin = useCallback(async (username, password) => {
    const trimmedUsername = username.trim()
    if (!trimmedUsername || !password) {
      throw new Error('Completa usuario y contraseña para continuar.')
    }

    try {
      const remoteUser = await apiClient.login(trimmedUsername, password)
      setRemoteUser(remoteUser)
      setIsLoggedIn(true)
      return remoteUser
    } catch (error) {
      throw new Error(error.message || 'No se pudo iniciar sesión con la base de datos.')
    }
  }, [setRemoteUser])

  const handleRegister = useCallback(async (data) => {
    const { username, password, age, guild, starter, acceptTerms } = data
    const trimmedUsername = username.trim()
    const numericAge = Number(age)

    if (!trimmedUsername || !password) {
      throw new Error('Completa usuario y contraseña para continuar.')
    }

    if (!Number.isInteger(numericAge) || numericAge < 16) {
      throw new Error('La edad debe ser un número entero igual o superior a 16 años.')
    }

    if (!acceptTerms) {
      throw new Error('Debes aceptar los acuerdos y políticas de privacidad para registrarte.')
    }

    try {
      const remoteUser = await apiClient.register({
        username: trimmedUsername,
        password,
        age: numericAge,
        guild,
        starter,
        acceptTerms,
      })
      setRemoteUser(remoteUser)
      setIsLoggedIn(true)
      return remoteUser
    } catch (error) {
      throw new Error(error.message || 'No se pudo registrar en la base de datos.')
    }
  }, [setRemoteUser])

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false)
    setUser(null)
    apiClient.logout()
  }, [])

  useEffect(() => {
    if (!apiClient.isConfigured()) return undefined

    let isActive = true
    apiClient.getProfile()
      .then((profile) => {
        if (!isActive) return
        setRemoteUser(profile)
        setIsLoggedIn(true)
      })
      .catch(() => {})
      .finally(() => {
        if (isActive) setIsSessionRestoring(false)
      })

    return () => { isActive = false }
  }, [setRemoteUser])

  useEffect(() => {
    if (!isLoggedIn) return undefined

    const expiresAt = apiClient.getSessionExpiresAt()
    const expirationTimer = window.setTimeout(
      handleLogout,
      expiresAt ? Math.max(0, expiresAt - Date.now()) : 0,
    )
    return () => window.clearTimeout(expirationTimer)
  }, [isLoggedIn, handleLogout])

  const value = {
    isSessionRestoring,
    isLoggedIn,
    user,
    setUser,
    setRemoteUser,
    persistUser,
    handleLogin,
    handleRegister,
    handleLogout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
