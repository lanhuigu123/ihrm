const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /**关闭保存时代码格式化校验*/
  lintOnSave: false,
  /**修改打包的文件夹和路径*/
  outputDir: 'index',
  /**基准地址 @vue/cli 3.3之前是baseUrl*/
  publicPath: '/',
  /**静态资源文件修改路径 */
  assetsDir: 'assets',
  /**开发环境服务配置
   * 8080 -- 80端口是后端服务重要的端口号，一些后端服务必须用80端口才能启动，尽量不用80端口
   */
  devServer: {
    /**开发运行时的端口*/
    port: '9999',
    /**开发运行时的域名，配置0.0.0.0后，外网可以访问你的域名*/
    host: '0.0.0.0',
    /**关闭网络安全校验*/
    https: false,
    /**是否自动打开浏览器*/
    open: true,
    /**代理proxy*/
    proxy: {
      '/api': {
        /**配置代理默认代理方式*/
        changeOrigin: true,
        /**如果是http接口，需要配置该参数*/
        secure: false,
        /**配置代理路径*/
        target: 'https://ihrm-java.itheima.net/api',
        /**路径重写*/
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
