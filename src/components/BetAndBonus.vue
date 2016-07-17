<template lang="pug">
    //- 展示用户的下注金额 以及 奖金金额 当然还有倒计时
    div.bonus-bar
        div.bonus-item.bet
            div.item-back.forzen
                div.item-show
                    div.bet-num(v-bind:style="betNum") {{width}}
        div.bonus-item.count-down
            div.count-down-back
                div.count-down-show
                    div.count-down-num(v-bind:style="{fontSize:40*zoomRate.x+'px'}",v-html="countDown | time")
        div.bonus-item.bonus
            div.item-back.balance
                div.item-show(@touchend="showMessage")
                    div.bet-num(v-bind:style="betNum") {{height}}
</template>
<script>
export default {
    props: ['zoomRate'],
    ready() {
        console.log(this.countDown)
        this.count(this.countDown)
    },
    data() {
        return {
            countDown: 310,
            width: window.innerWidth,
            height: window.innerHeight
        }
    },
    computed: {
        betNum: function() {
            return {
                fontSize: 34 * this.zoomRate.x + 'px',
                lineHeight: 3 * 34 * this.zoomRate.x + 'px'
            }
        }
    },
    methods: {
        showMessage() {
            this.$dispatch('showMessage', 5)
        },
        count() {
            if (this.countDown < 0) {
                this.countDown = 300
            }
            this.countDown--
                let that = this
            setTimeout(function() {
                that.count()
            }, 1000)
        }
    }
}
</script>
<style>
img {
    width: 100%;
    height: 100%;
}

div.forzen {
    height: 100%;
    width: 80%;
    display: table-cell;
    vertical-align: middle;
    background: url(./../assets/切图/主界面/冻结.png) 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
}

div.balance {
    height: 100%;
    width: 80%;
    display: table-cell;
    vertical-align: middle;
    background: url(./../assets/切图/主界面/余额.png) 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
}

.bonus-bar {
    height: 20%;
}

div.item-back {
    display: table-cell;
    vertical-align: middle;
}

div.item-show {
    text-align: center;
}

div.item-show div {
    /*height: 30%;*/
}

div.bonus-item {
    display: table;
    float: left;
    height: 100%;
}

div.bet-num {
    margin: 30% 0 0 0;
    color: white;
}

div.bet,
div.bonus {
    width: calc(35% - 1em);
    padding: 0 .5em;
}

div.count-down {
    width: calc(30% - 1em);
    padding: 0 .5em;
}

div.count-down-num {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 2em;
}

div.count-down-back {
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    background: url(./../assets/切图/主界面/count-down.png) 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
}

div.count-down-show {
    display: table;
    height: 92%;
    width: 92%;
    margin: 4%;
}
</style>
