import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import myPlugin from '@/components/plugin'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(myPlugin)

Vue.config.productionTip = false
Vue.filter('toDor', function (text,msg) {
  return `${msg}${text}`
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
