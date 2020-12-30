import Vue from 'vue'
import axios from 'axios'
import SparkMD5 from 'SparkMD5'
import MavonEditor from 'MavonEditor'

import App from './App.vue'
import Routers from './routers.js'

Vue.use(MavonEditor)
Vue.prototype.$Http = axios
Vue.prototype.$Md5 = SparkMD5
Vue.prototype.$MarkDown = MavonEditor.markdownIt
Vue.config.productionTip = false

new Vue({
  router: Routers,
  render: h => h(App),
}).$mount('#app')