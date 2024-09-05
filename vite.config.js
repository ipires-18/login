import react from "@vitejs/plugin-react";
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins:[react()],
  build:{
    target:'ES6',
    manifest:true,
    outDir:'build',
    emptyOutDir:true,
    minify:true,
    cssMinify:'esbuild',
    rollupOptions:{
      preserveEntrySignatures:'allow-extension',
      input:{
        'capital-planner-login':'src/capital-planner-login.tsx'
      },
      output:{
        inlineDynamicImports:false,
        format:'systemjs',
        exports:'auto',
        entryFileNames:'[name].js',
        chunkFileNames:'[name].js',
        assetFileNames:'[name].[ext]',
      }
    }
  }
})