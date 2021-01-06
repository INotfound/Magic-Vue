module.exports = {
  configureWebpack: {
    // 配置使用CDN
    externals: {
      "vue": "Vue",
      'axios':'axios',
      "SparkMD5": "SparkMD5",
      "MavonEditor": "MavonEditor",
    }
  }
}