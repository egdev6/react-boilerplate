import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mockSimple from 'vite-plugin-mock-simple';
import svgr from 'vite-plugin-svgr';
import mockServer from './src/mocks/mocksServer.js';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mockSimple(mockServer),
    svgr({
      svgrOptions: {
        ref: true,
        svgo: false,
        titleProp: true
      },
      include: '**/*.svg'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@atoms': path.resolve(__dirname, './src/components/atoms'),
      '@molecules': path.resolve(__dirname, './src/components/molecules'),
      '@organisms': path.resolve(__dirname, './src/components/organisms'),
      '@templates': path.resolve(__dirname, './src/components/templates'),
      '@config': path.resolve(__dirname, './src/config'),
      '@api': path.resolve(__dirname, './src/infrastructure/api'),
      '@hooks': path.resolve(__dirname, './src/infrastructure/hooks'),
      '@models': path.resolve(__dirname, './src/infrastructure/models'),
      '@store': path.resolve(__dirname, './src/infrastructure/store'),
      '@mocks': path.resolve(__dirname, './src/mocks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@tests': path.resolve(__dirname, './src/tests'),
      '@constants': path.resolve(__dirname, './src/utils/constants'),
      '@helpers': path.resolve(__dirname, './src/utils/helpers')
    }
  }
});
