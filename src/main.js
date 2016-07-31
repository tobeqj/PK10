import Vue from 'vue'
import App from './App'
import wx from 'weixin-js-sdk'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.filter('time', function(value) {
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
let config = {}
Vue.http.get('getMainConfig', { params: { url: window.location.href.split('#')[0] } }).then((res) => { //从后台获取配置文件
    config = res.data
    console.log(config)
        // wx.config({
        //     debug: true,
        //     appId: '<?php echo $signPackage["appId"];?>',
        //     timestamp: <?php echo $signPackage["timestamp"];?>,
        //     nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        //     signature: '<?php echo $signPackage["signature"];?>',
        //     jsApiList: [
        //         // 所有要调用的 API 都要加到这个列表中
        //         'onMenuShareTimeline',
        //         'onMenuShareAppMessage',
        //         'chooseImage'
        //     ]
        // });
}, (res) => {
    console.error(res)
})

//https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxffe190dec3271a1c&redirect_uri=http://lsweixintest.applinzi.com/php/urlopenid.php&response_type=code&scope=snsapi_userinfo&state=123
new Vue({
    el: 'body',
    components: { app: App }
})
