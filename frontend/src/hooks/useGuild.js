import { useState, useCallback } from 'react'
import { apiClient } from '../lib/apiClient'
import { localDb } from '../lib/localDb'

export function useGuild(user, dbState, setDbState) {
  const [guildData, setGuildData] = useState(null)
  const [guildChatInput, setGuildChatInput] = useState('')
  const [guildNotice, setGuildNotice] = useState('')
  const [isGuildLoading, setIsGuildLoading] = useState(false)

  const getLocalGuildData = useCallback((sourceDb = dbState) => {
    const members = sourceDb.users
      .filter((entry) => entry.guild === user?.guild)
      .map((entry) => ({
        username: entry.username,
        guild: entry.guild,
        role: entry.guildRole || 'member',
      }))
      .sort((left, right) => {
        const roleOrder = { leader: 0, elite: 1, member: 2 }
        return roleOrder[left.role] - roleOrder[right.role] || left.username.localeCompare(right.username)
      })
    const currentMember = members.find((member) => member.username === user?.username)

    return {
      name: user?.guild,
      role: currentMember?.role || 'member',
      members,
      messages: sourceDb.guildChats?.[user?.guild] || [{
        user: `Guía de ${user?.guild}`,
        message: `Bienvenidos al gremio ${user?.guild}. Preséntate y comparte tus aventuras con la comunidad.`,
        system: true,
      }],
    }
  }, [user, dbState])

  const currentGuildData = guildData || getLocalGuildData()

  const loadGuildData = useCallback(async () => {
    if (!user) return
    setIsGuildLoading(true)
    setGuildNotice('')
    if (apiClient.isConfigured()) {
      try {
        setGuildData(await apiClient.getCurrentGuild())
        setIsGuildLoading(false)
        return
      } catch {
        setGuildNotice('Sin conexión al servidor: se muestra la comunidad guardada en este dispositivo.')
      }
    }
    setGuildData(getLocalGuildData())
    setIsGuildLoading(false)
  }, [user, getLocalGuildData])

  const sendGuildMessage = useCallback(async (event) => {
    event.preventDefault()
    const message = guildChatInput.trim()
    if (!message || !user) return

    if (apiClient.isConfigured()) {
      try {
        setGuildData(await apiClient.sendGuildMessage(message))
        setGuildChatInput('')
        setGuildNotice('')
        return
      } catch (error) {
        setGuildNotice(error.message)
        return
      }
    }

    const currentGuild = guildData || getLocalGuildData()
    const nextMessage = {
      user: user.username,
      message,
      guild: user.guild,
      guildRole: currentGuild.role,
    }
    const nextGuildChats = {
      ...dbState.guildChats,
      [user.guild]: [...currentGuild.messages, nextMessage],
    }
    const nextDb = { ...dbState, guildChats: nextGuildChats }
    localDb.write(nextDb)
    setDbState(nextDb)
    setGuildData({ ...currentGuild, messages: nextGuildChats[user.guild] })
    setGuildChatInput('')
  }, [user, guildChatInput, guildData, getLocalGuildData, dbState, setDbState])

  const changeGuildMemberRole = useCallback(async (member) => {
    const role = member.role === 'elite' ? 'member' : 'elite'
    if (apiClient.isConfigured()) {
      try {
        setGuildData(await apiClient.setGuildMemberRole(member.username, role))
        setGuildNotice(`${member.username}: ${role === 'elite' ? 'añadido al Alto Mando' : 'rango de miembro restaurado'}.`)
      } catch (error) {
        setGuildNotice(error.message)
      }
      return
    }

    const nextUsers = dbState.users.map((entry) =>
      entry.username === member.username ? { ...entry, guildRole: role } : entry,
    )
    const nextDb = { ...dbState, users: nextUsers }
    localDb.write(nextDb)
    setDbState(nextDb)
    const nextGuildData = getLocalGuildData(nextDb)
    setGuildData(nextGuildData)
    setGuildNotice(`${member.username}: ${role === 'elite' ? 'añadido al Alto Mando' : 'rango de miembro restaurado'}.`)
  }, [dbState, setDbState, getLocalGuildData])

  return {
    guildData: currentGuildData,
    guildChatInput,
    setGuildChatInput,
    guildNotice,
    setGuildNotice,
    isGuildLoading,
    loadGuildData,
    sendGuildMessage,
    changeGuildMemberRole,
  }
}
