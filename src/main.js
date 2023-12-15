import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { MessageBox,Message} from 'element-ui';
import coms from './elementUse'
import VueI18n from "vue-i18n"
//引入element处理语言
import ElementLocale from "element-ui/lib/locale"
import i18n from "./language/index"
import '@/icons'
import * as Direcives from "@/directives"
import '@/styles/element-variables.scss'
coms.forEach(i=>{
	Vue.component(i.name, i)
})
ElementLocale.i18n((key, value) => i18n.t(key, value))
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app")
