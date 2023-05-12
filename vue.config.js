const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  devServer: {
    port: 8081,
    open: true,
    proxy: {
      '/sendMsg': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/sendMsg': ''
        // }
      },
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },

    },
    allowedHosts: [
      'iyunmc.cn', // 允许访问的域名地址，即花生壳内网穿透的地址
      '.iyunmc.cn'   // .是二级域名的通配符   
    ],
  },
  transpileDependencies: true
})
