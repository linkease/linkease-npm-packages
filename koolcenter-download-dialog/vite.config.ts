import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        target: "es2015",
        assetsDir: "",
        cssCodeSplit: true,
        assetsInlineLimit: 4096000,
        chunkSizeWarningLimit: 4096,
        rollupOptions: {
            output: {
                entryFileNames: `main.js`,
                chunkFileNames: `chunk.[hash].js`,
                assetFileNames: `main.[ext]`
            },
            plugins: [
                // rename()
            ],
            external: []
        }
    },
})
