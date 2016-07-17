<template lang="pug">
    //- 状态区 ，展示用户的一些状态
    div.state
        div.state-item.money.table
            div.money-state.table-cell
                div.button
                    table
                        tr
                            td
                                span.money-num(v-bind:style="{fontSize:34*zoomRate.x+'px'}") 1000
        div.state-item.portrait
            div.polygon(@touchend="showMessage")
                //- div.portrait-img
                //- img(src="../assets/th.jpg")
        div.state-item.stars.table
            div.money-state.table-cell
                div.button.undo
</template>
<script>
export default {
    props: ['zoomRate'],
    ready() {

    },
    methods: {
        showMessage() {
            this.$dispatch('showMessage', 5) // 5代表背景数组的最后一个，即显示充值的背景
        }
    }
}
</script>
<style>
.state {
    height: 17%;
    width: 100%;
    bottom: 1em;
    position: absolute;
    /*background: rgba(255, 255, 255, 0.5);*/
}

table {
    width: 100%;
    height: 100%;
}

div.state-item {
    float: left;
    width: 33.3333%;
    height: 100%;
}

div.money-state {
    padding: 0 1em;
}

div.portrait {
    padding: 0;
}

div.portrait-img {
    width: 100%;
    height: 100%;
    background: url(../assets/th.jpg) 50% 50% no-repeat;
    background-size: contain;
}

div.polygon {
    /*clip-path: polygon(50% 0, 100% 27%, 100% 73%, 50% 100%, 0% 73%, 0 27%);*/
    width: 100%;
    height: 100%;
    background: url(../assets/切图/主界面/头像1.png) 50% 50% no-repeat;
    background-size: contain;
    margin: auto;
}

div.button.undo {
    background: url(./../assets/切图/主界面/撤销.png) 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
}

div.button {
    background: url(./../assets/切图/主界面/投注金额.png) 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    height: 40%;
    padding: 5%;
}

div.button span {
    /*font-size: 1.5rem;*/
}


/*div.stars-button{
    padding: .8em;
}*/

.money-icon {
    /*background: url(../assets/切图/商城/金币.png) 50% 50%;*/
    /*background-size: contain;*/
    /*background-repeat: no-repeat;*/
}

span.money-icon {
    float: left;
    font-size: 1.5em;
}

.money-num {
    color: white;
    font-size: 1.5em;
}
</style>
