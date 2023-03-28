const { defineConfig } = require('@vue/cli-service')

// const filename = "[name].[hash]"
const filename = "main"

module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    css: {
        extract: {
            filename: filename + ".css",
            chunkFilename: filename + ".css",
        },
    },
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        output: {
            filename: filename + ".js",
            chunkFilename: filename + ".js",
        }
    },
})
