module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: 'local.tco.jd.com',
        port: 8091,
        https: false,
        hotOnly: false,
        proxy: {
            '/benchmark': {
                target: 'http://test.benchmark.tco.jd.com/',
                changeOrigin: true
            }
        }
    }
};
