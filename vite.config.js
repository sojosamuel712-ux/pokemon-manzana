import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const apiProxyTarget = process.env.API_PROXY_TARGET || 'http://localhost:3000'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: Array.from({ length: 9 }, (_, index) => {
            const generation = index + 1
            return {
              name: `pokemon-generation-${generation}`,
              test: new RegExp(`/pokemon/generation${generation}\\.js$`),
              priority: 10,
            }
          }),
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': apiProxyTarget,
      '/models': apiProxyTarget,
      '/cries': apiProxyTarget,
      '/sprites': apiProxyTarget,
    },
  },
})
