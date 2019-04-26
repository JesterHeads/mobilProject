import Vue from 'nativescript-vue'
import Home from './components/Home'
import Pager from './nativescript-pager/vue'
import router from './router'

Vue.use(Pager)
Vue.prototype.$router = router;
Vue.prototype.$goTo = function(to,options){
    this.$navigateTo(this.$router[to],options);
}
// Uncommment the following to see NativeScript-Vue output logs
 Vue.config.silent = false;

new Vue({
    render: h => h('frame', [h(Home)])
}).$start();
