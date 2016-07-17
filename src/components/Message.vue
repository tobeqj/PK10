<template lang="pug">
    div.model(v-show='dialogShow',transition="message")
        div.dialog(v-bind:style="dialog")
            div.close(v-bind:style="close",@touchend="dialogShow = false")
            div.content(v-bind:style="content")
            img(v-bind:src="dialogImg[currentIndex].background")
            //- div.title
</template>
<script>
export default {
    props: ['zoomRate'],
    data() {
        return {
            dialogShow: false,
            currentIndex: 0,
            dialogImg: [{
                background: require('../assets/切图/投注记录/投注记录.png'),
                close: require('../assets/切图/投注记录/关闭.png')
            }, {
                background: require('../assets/切图/开奖记录/开奖记录.png'),
                close: require('../assets/切图/开奖记录/关闭.png')
            }, {
                background: require('../assets/切图/游戏规则/游戏规则.png'),
                close: require('../assets/切图/游戏规则/关闭.png')
            }, {
                background: require('../assets/切图/商城/兑换商城.png'),
                close: require('../assets/切图/商城/关闭.png')
            }, {
                background: require('../assets/切图/赠送/赠送好友金币.png'),
                close: require('../assets/切图/赠送/关闭.png')
            }, {
                background: require('../assets/切图/充值/底.png'),
                close: require('../assets/切图/充值/关闭.png')
            }]
        }
    },
    computed: {
        dialog() {
            return {
                width: 550 * this.zoomRate.x + 'px',
                height: 760 * this.zoomRate.y + 'px',
                margin: 140 * this.zoomRate.y + 'px 0 0 ' + 45 * this.zoomRate.x + 'px'
            }
        },
        content() {
            return {
                width: 478 * this.zoomRate.x + 'px',
                height: 618 * this.zoomRate.y + 'px',
                margin: 90 * this.zoomRate.y + 'px 0 0 ' + 37 * this.zoomRate.x + 'px'
            }
        },
        close() {
            return {
                width: 42 * this.zoomRate.x + 'px',
                height: 42 * this.zoomRate.y + 'px',
                margin: 23 * this.zoomRate.y + 'px 0 0 ' + 484 * this.zoomRate.x + 'px',
                background: 'url(' + this.dialogImg[this.currentIndex].close + ') 50% 50% / contain no-repeat'
            }
        }
    },
    events: {
        showMessage(event) {
            this.dialogShow = true
            this.currentIndex = event
        }
    }
}
</script>
<style>
div.model {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    /*background: rgba(12,26,55,.35);*/
    background: url(../assets/切图/暗色挡板.png);
    top: 0;
    /*padding: 10% 7.5%;*/
}

.message-transition {
    transition: all .3s ease;
}

.message-enter,
.message-leave {
    opacity: 0;
}

div.title {
    height: 20%;
    /*background: black;*/
}

div.close {
    position: absolute;
}

div.content {
    position: absolute;
    background: rgba(0, 0, 0, .6);
}
</style>
