module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost/mehrab.xyz/wp-json/',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {"^/api": '/'}
            }
        }
    }
}