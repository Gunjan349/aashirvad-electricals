import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin';
import sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compression(),
    viteImagemin({
      optipng:{
        optimizationLevel: 7
      },
      jpegTran:{
        progressive: true
      }
    }),
    
  ],
 
})
