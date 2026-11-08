const backendBaseUrl = (import.meta.env?.VITE_API_BASE_URL || '').replace(/\/+$/, '')

export const getBackendUrl = (path) => {
  if (/^[a-z][a-z\d+.-]*:\/\//i.test(path)) return path
  return `${backendBaseUrl}${path.startsWith('/') ? path : `/${path}`}`
}
