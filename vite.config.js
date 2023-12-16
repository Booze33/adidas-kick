import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss('./tailwind.config.js')],
  build: {
    outDir: 'build', // or your desired output directory
  },
})
