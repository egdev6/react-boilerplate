import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src/'),
      api: path.resolve(__dirname, './src/api'),
      icons: path.resolve(__dirname, './src/assets/icons/'),
      images: path.resolve(__dirname, './src/assets/images/'),
      components: path.resolve(__dirname, './src/components/'),
      config: path.resolve(__dirname, './src/config/'),
      constants: path.resolve(__dirname, './src/constants/'),
      hooks: path.resolve(__dirname, './src/hooks/'),
      models: path.resolve(__dirname, './src/models/'),
      utils: path.resolve(__dirname, './src/utils/'),
    },
  },
})
