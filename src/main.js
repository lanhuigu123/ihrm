import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './utils/httpRequest'
import {
  Button,
  Select,
  MessageBox,
  Message,
  Form,
  FormItem,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

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
