import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.prototype.Caman = window.Caman;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker
      .register('sw.js')
      .then(() => console.log('sw register success'))
        .catch((error) => console.log('sw register error', error))
  }
}

registerServiceWorker()
