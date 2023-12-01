import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './utils/httpRequest'
import { Button, Select, MessageBox, Message } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$msg = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
