import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
Vue.filter('time', function (value) {
  let min = Math.floor(value / 60)
  if (min < 10) {
    min = '0' + min
  }
  let sec = value % 60
  if (sec < 10) {
    sec = '0' + sec
  }
  return min + ':' + sec
})
new Vue({
  el: 'body',
  components: {app: App}
})
