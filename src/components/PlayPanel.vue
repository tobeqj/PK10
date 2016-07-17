<template lang="pug">
    //- 主游戏区
    div.playpanel
        div.table-panel(v-bind:style="{width:imgSize.width*zoomRate.x+'px',height:imgSize.height*zoomRate.y+'px'}")
            div.num.single(v-bind:style="single")
            div.num.double(v-bind:style="double")
            div.num.zero(v-bind:style="zero")
            div.num.one(v-bind:style="one")
            div.num.two(v-bind:style="two")
            div.num.three(v-bind:style="three")
            div.num.four(v-bind:style="four")
            div.num.five(v-bind:style="five")
            div.num.six(v-bind:style="six")
            div.num.seven(v-bind:style="seven")
            div.num.eight(v-bind:style="eight")
            div.num.nine(v-bind:style="nine")
            div.num.big(v-bind:style="big")
            div.num.small(v-bind:style="small")
            div.num.formula(v-bind:style="formula") 9+8=1(7)
            div.num.bonudnum(v-bind:style="bonudnum") 
                table
                    tr
                        td 7
        img(v-bind:src="tablePanelImg",@touchend="bet",v-bind:style="{width:imgSize.width*zoomRate.x+'px',height:imgSize.height*zoomRate.y+'px'}")
</template>
<script>
export default {
    props: ['zoomRate'],
    data() {
        return {
            tablePanelImg: require('../assets/切图/主界面/主操作.png'),
            imgSize: {
                width: 640,
                height: 528
            }
        }
    },
    computed: {
        single() {
            return {
                width: 83 * this.zoomRate.x + 'px',
                height: 83 * this.zoomRate.y + 'px',
                margin: 20 * this.zoomRate.y + 'px 0 0 ' + 7 * this.zoomRate.x + 'px'
            }
        },
        double() {
            return {
                width: 83 * this.zoomRate.x + 'px',
                height: 83 * this.zoomRate.y + 'px',
                margin: 20 * this.zoomRate.y + 'px 0 0 ' + 548 * this.zoomRate.x + 'px'
            }
        },
        zero() {
            return {
                width: 120 * this.zoomRate.x + 'px',
                height: 120 * this.zoomRate.y + 'px',
                margin: 174 * this.zoomRate.y + 'px 0 0 ' + (18 + 120 * 0) * this.zoomRate.x + 'px'
            }
        },
        one() {
            return {
                width: 120 * this.zoomRate.x + 'px',
                height: 120 * this.zoomRate.y + 'px',
                margin: 174 * this.zoomRate.y + 'px 0 0 ' + (18 + 120 * 1) * this.zoomRate.x + 'px'
            }
        },
        two() {
            return {
                width: 120 * this.zoomRate.x + 'px',
                height: 120 * this.zoomRate.y + 'px',
                margin: 174 * this.zoomRate.y + 'px 0 0 ' + (18 + 120 * 2) * this.zoomRate.x + 'px'
            }
        },
        three() {
            return {
                width: 120 * this.zoomRate.x + 'px',
                height: 120 * this.zoomRate.y + 'px',
                margin: 174 * this.zoomRate.y + 'px 0 0 ' + (18 + 120 * 3) * this.zoomRate.x + 'px'
            }
        },
        four() {
            return {
                width: 120 * this.zoomRate.x + 'px',
                height: 120 * this.zoomRate.y + 'px',
                margin: 174 * this.zoomRate.y + 'px 0 0 ' + (18 + 120 * 4) * this.zoomRate.x + 'px'
            }
        },
        five() {
            return {
                width: 120 * this.zoomRate.x + 'px',
                height: 120 * this.zoomRate.y + 'px',
                margin: (174 + 120) * this.zoomRate.y + 'px 0 0 ' + (18 + 120 * 0) * this.zoomRate.x + 'px'
            }
        },
        six() {
            return {
                width: 120 * this.zoomRate.x + 'px',
                height: 120 * this.zoomRate.y + 'px',
                margin: (174 + 120) * this.zoomRate.y + 'px 0 0 ' + (18 + 120 * 1) * this.zoomRate.x + 'px'
            }
        },
        seven() {
            return {
                width: 120 * this.zoomRate.x + 'px',
                height: 120 * this.zoomRate.y + 'px',
                margin: (174 + 120) * this.zoomRate.y + 'px 0 0 ' + (18 + 120 * 2) * this.zoomRate.x + 'px'
            }
        },
        eight() {
            return {
                width: 120 * this.zoomRate.x + 'px',
                height: 120 * this.zoomRate.y + 'px',
                margin: (174 + 120) * this.zoomRate.y + 'px 0 0 ' + (18 + 120 * 3) * this.zoomRate.x + 'px'
            }
        },
        nine() {
            return {
                width: 120 * this.zoomRate.x + 'px',
                height: 120 * this.zoomRate.y + 'px',
                margin: (174 + 120) * this.zoomRate.y + 'px 0 0 ' + (18 + 120 * 4) * this.zoomRate.x + 'px'
            }
        },
        big() {
            return {
                width: 83 * this.zoomRate.x + 'px',
                height: 83 * this.zoomRate.y + 'px',
                margin: 425 * this.zoomRate.y + 'px 0 0 ' + 8 * this.zoomRate.x + 'px'
            }
        },
        small() {
            return {
                width: 83 * this.zoomRate.x + 'px',
                height: 83 * this.zoomRate.y + 'px',
                margin: 425 * this.zoomRate.y + 'px 0 0 ' + 548 * this.zoomRate.x + 'px'
            }
        },
        formula() {
            return {
                width: 170 * this.zoomRate.x + 'px',
                textAlign: 'center',
                // height: 83 * this.zoomRate.y + 'px',
                fontSize: 40 * this.zoomRate.x + 'px',
                margin: 37 * this.zoomRate.y + 'px 0 0 ' + 240 * this.zoomRate.x + 'px'
            }
        },
        bonudnum() {
            return {
                width: 68 * this.zoomRate.x + 'px',
                textAlign: 'center',
                fontSize: 40 * this.zoomRate.x + 'px',
                height: 68 * this.zoomRate.y + 'px',
                margin: 90 * this.zoomRate.y + 'px 0 0 ' + 290 * this.zoomRate.x + 'px'
            }
        }
    },
    methods: {
        bet(event) {
            console.log('Height' + event.target.offsetHeight)
            console.log('Width' + event.target.offsetWidth)
            console.log(event)
        }
    }
}
</script>
<style>
.playpanel {
    /*background: url(../assets/切图/主界面/主操作.png) 50% 50%;*/
    background-size: contain;
    background-repeat: no-repeat;
    height: 50%;
}

div.table-panel {
    width: 100%;
    height: 50%;
    position: absolute;
    /*display: none;*/
    background: rgba(255, 0, 0, .3);
}

div.single {
    background: rgba(0, 255, 255, .6);
    border-bottom-right-radius: 1em;
}

div.double {
    background: rgba(0, 255, 255, .6);
    margin: 3% 0% 0% 86%;
    border-bottom-left-radius: 1em;
}

div.big {
    border-top-right-radius: 1em;
}

div.small {
    border-top-left-radius: 1em;
}

div.num {
    position: absolute;
    background: rgba(0, 255, 255, .6);
}

div.bonudnum {
    background: url(../assets/切图/主界面/显示-红.png) 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
