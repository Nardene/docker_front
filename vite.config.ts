import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      _APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      port: parseInt(env.VITE_DEFAULT_PORT),
    },
    plugins: [react()],
  }
})