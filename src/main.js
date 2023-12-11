import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './utils/httpRequest'
// import './styles/element-variables.scss'
// import VueI18n from 'vue-i18n'
//引入element处理语言
import ElementLocale from 'element-ui/lib/locale'

// 引入我们实例化后vue-i18
import i18n from './language/index'
//将我们实例化的vue-i8编写公共方法,绑定要elementui语言上
ElementLocale.i18n((key, value) => i18n.t(key, value))
// 把i18注册到Vue实例上

import '@/icons'
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
  MenuItemGroup,
  Tree,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Notification,
  Calendar,
  Dialog,
  Option,
  OptionGroup,
  Tooltip,
  Table,
  TableColumn,
  Row,
  Col,
  Card,
  Tabs,
  TabPane,
  Pagination,
  Switch,
  Image
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
Vue.use(Tree)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Calendar)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Tooltip)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Image)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$msg = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$http = http
Vue.prototype.$notify = Notification

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
