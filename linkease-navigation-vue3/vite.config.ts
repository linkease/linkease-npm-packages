import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            },
        ],
    },
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
