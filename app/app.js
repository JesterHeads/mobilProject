import Vue from 'nativescript-vue';

import Home from './components/Home';
import router from './router';

Vue.prototype.$router = router;
Vue.prototype.$goTo = function(to,options){
    this.$navigateTo(this.$router[to],options);
}

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();