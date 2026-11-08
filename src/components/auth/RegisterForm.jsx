import { useState } from 'react'
import { pokemonCatalog } from '../../data/pokemonCatalog'
import { guildNames } from '../../data/guildCatalog'

const starterIds = [
  'bulbasaur', 'charmander', 'squirtle',
  'chikorita', 'cyndaquil', 'totodile',
  'treecko', 'torchic', 'mudkip',
  'turtwig', 'chimchar', 'piplup',
  'snivy', 'tepig', 'oshawott',
  'chespin', 'fennekin', 'froakie',
  'rowlet', 'litten', 'popplio',
  'grookey', 'scorbunny', 'sobble',
  'sprigatito', 'fuecoco', 'quaxly',
]

const starterTypeIcons = { Grass: '🌿', Fire: '🔥', Water: '💧' }

const starters = starterIds
  .map((id) => pokemonCatalog.find((pokemon) => pokemon.id === id))
  .filter(Boolean)
  .map((pokemon) => ({
    name: pokemon.name,
    type: pokemon.types.join(' / '),
    icon: starterTypeIcons[pokemon.types[0]],
  }))

export function RegisterForm({ onRegister }) {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    age: 16,
    starter: 'Bulbasaur',
    guild: 'Garchomp',
    acceptTerms: false,
  })
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    
    try {
      await onRegister(registerForm)
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
          minLength={3}
          maxLength={24}
          autoComplete="username"
          required
          value={registerForm.username}
          onChange={(event) => setRegisterForm((current) => ({ ...current, username: event.target.value }))}
          placeholder="Tu nombre de entrenador"
        />
      </label>

      <label>
        Contraseña
        <input
          type="password"
          minLength={10}
          maxLength={128}
          autoComplete="new-password"
          required
          value={registerForm.password}
          onChange={(event) => setRegisterForm((current) => ({ ...current, password: event.target.value }))}
          placeholder="Segura y memorable"
        />
      </label>

      <label>
        Edad
        <input
          type="number"
          min="16"
          max="99"
          required
          value={registerForm.age}
          onChange={(event) => setRegisterForm((current) => ({ ...current, age: event.target.value }))}
          placeholder="16"
        />
      </label>

      <label>
        Pokémon inicial
        <select
          required
          value={registerForm.starter}
          onChange={(event) => setRegisterForm((current) => ({ ...current, starter: event.target.value }))}
        >
          {starters.map((starter) => (
            <option key={starter.name} value={starter.name}>
              {starter.name} {starter.icon} — {starter.type}
            </option>
          ))}
        </select>
      </label>

      <label>
        Gremio
        <select
          required
          value={registerForm.guild}
          onChange={(event) => setRegisterForm((current) => ({ ...current, guild: event.target.value }))}
        >
          {guildNames.map((guild) => (
            <option key={guild} value={guild}>
              {guild}
            </option>
          ))}
        </select>
      </label>

      <div className="terms-acceptance">
        <label className="checkbox-row" htmlFor="accept-terms">
          <input
            id="accept-terms"
            type="checkbox"
            checked={registerForm.acceptTerms}
            onChange={(event) =>
              setRegisterForm((current) => ({
                ...current,
                acceptTerms: event.target.checked,
              }))
            }
          />
          Acepto
        </label>
        <a className="terms-link" href="/acuerdos">los acuerdos y políticas de privacidad de la comunidad.</a>
      </div>

      {error && <p className="auth-form-error" role="alert">{error}</p>}
      <button type="submit" className="primary-button">
        Crear cuenta
      </button>
    </form>
  )
}
