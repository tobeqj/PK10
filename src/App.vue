<template lang="pug">
  background
  menu-bar(v-bind:game-data="gameData",v-bind:notice="notice",v-bind:zoom-rate="zoomRate")
  bet-and-bonus(v-bind:zoom-rate="zoomRate",v-bind:userinfo="userinfo")
  play-panel(v-bind:zoom-rate="zoomRate")
  state(v-bind:zoom-rate="zoomRate",v-bind:userinfo="userinfo")
  //- bet-multiple
  message(v-bind:zoom-rate="zoomRate")
</template>
<script>
import Background from './components/Background.vue'
import MenuBar from './components/MenuBar.vue'
import BetAndBonus from './components/BetAndBonus.vue'
import PlayPanel from './components/PlayPanel.vue'
import State from './components/State.vue'
import BetMultiple from './components/BetMultiple.vue'
import Message from './components/Message.vue'
import gameData from './data/data' //  加载模板数据

export default {
    ready() {
            let that = this
            window.onresize = function() {
                that.screenSize.width = window.innerWidth
                that.screenSize.height = window.innerHeight
            }
            this.init()
        },
        data() {
            return {
                gameData: gameData,
                notice: require('./data/notice.js'),
                userinfo: require('./data/userinfo.js'),
                stageSize: { // 整体画布大小,所有变化组件再次基础上乘以放大倍率
                    width: 640,
                    height: 1008
                },
                screenSize: {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        },
        methods: {
            init() {
                // 初始化读取数据
                this.$emit('getUserInfo')
                this.$emit('getLastNotice')
            },
            show() {
                console.log('hello world')
            },
            getUserInfoByNet(code) { //从网络获取user信息

            }
        },
        computed: {
            zoomRate: function() { // 初始化放大倍率
                let x = this.screenSize.width / this.stageSize.width
                let y = this.screenSize.height / this.stageSize.height
                return {
                    x: x,
                    y: y
                }
            }
        },
        events: {
            showMessage(event) {
                this.$broadcast('showMessage', event)
            },
            getUserInfo(event) {
                this.$http.get('getuserinfo', {
                    params: {
                        openid: 'xxxxxxxxxxxx'
                    }
                }).then((res) => {
                    this.userinfo = res.data
                }, (res) => {
                    console.error(res)
                })
            },
            getLastNotice(event) {
                this.$http.get('getLastNotice').then((res) => {
                    this.notice = res.data
                }, (res) => {
                    console.error(res)
                })
            }
        },
        components: {
            'background': Background,
            'menu-bar': MenuBar,
            'bet-and-bonus': BetAndBonus,
            'play-panel': PlayPanel,
            'state': State,
            'bet-multiple': BetMultiple,
            'message': Message
        }
}
</script>
<style>
body {
    margin: 0;
}

html,
body {
    height: 100%;
}

.table {
    display: table;
}

.table-cell {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
</style>
