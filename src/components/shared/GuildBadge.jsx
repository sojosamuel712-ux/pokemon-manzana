import { guildCatalog } from '../../data/guildCatalog'
import { getGuildRoleLabel } from '../../lib/guildRoles'

export function GuildBadge({ guild, role = 'member', compact = false }) {
  const guildInfo = guildCatalog[guild]
  const badgeLabel = `${getGuildRoleLabel(role)} · ${guild || 'Sin gremio'}`

  return (
    <span className={`guild-badge guild-badge-${role}${compact ? ' compact' : ''}`} title={badgeLabel} aria-label={badgeLabel}>
      {role === 'leader' ? <span aria-hidden="true">★</span> : role === 'elite' ? <span aria-hidden="true">✦</span> : <img src={guildInfo?.logo} alt="" />}
    </span>
  )
}
