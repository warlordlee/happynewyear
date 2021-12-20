<template>
    <commonContainer>
        <div class="bg-content">
        </div>
        <!--焰火效果图片-->
        <template v-for="(f,index) in fire">
            <img :key="'fire'+index" class="fire" :style="{width:f.size,height:f.size,left:f.left,top:f.top}"
                 src="../assets/home/fire.png">
        </template>
        <!--灯笼-->
        <template v-for="(l,index) in lights">
            <img :key="'light'+index" class="light" :src="l.src" :class="load?l.className:''">
        </template>
        <!--文字-->
        <div class="text">
            <div class="title">
                元旦快乐
            </div>
            <div class="dsp">
                再见,2020
            </div>
            <div class="dsp">
                你好,2021
            </div>
        </div>
        <!--底部图片-->
        <img src="../assets/newYear/bottom.png" class="bottom">
        <img src="../assets/newYear/year.png" class="year">
    </commonContainer>
</template>

<script>
    import commonContainer from "@/components/commonContainer";

    export default {
        name: "newYear",
        components: {
            commonContainer
        },
        mounted() {
            this.load = true
        },
        data() {
            return {
                load: false,
                //焰火图片
                fire: [
                    {
                        size: '160px',
                        left: '40%',
                        top: '-70px'
                    },
                    {
                        size: '120px',
                        left: '-60px',
                        top: '100px'
                    }, {
                        size: '120px',
                        left: '60%',
                        top: '250px'
                    }],
                lights: [
                    {
                        className: 'left-light',
                        src: require('../assets/newYear/light-left.png')
                    },
                    {
                        className: 'center-light',
                        src: require('../assets/newYear/light.png')
                    },
                    {
                        className: 'right-light',
                        src: require('../assets/newYear/light.png')
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .bg-content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60%;
        min-height: 450px;
        background: url("../assets/home/bg.png") center bottom no-repeat;
        background-size: 100% 100%;
    }

    .light {
        position: absolute;
    }

    .left-light {
        width: 100px;
        height: 320px;
        left: -26px;
        animation: leftLight 1s;
        -webkit-animation: leftLight 1s;
    }

    .center-light {
        width: 80px;
        height: 185px;
        left: 30%;
        top: -45px;
        animation: centerLight 1s;
        -webkit-animation: centerLight 1s;
    }

    .right-light {
        width: 95px;
        height: 235px;
        top: -5px;
        right: -25px;
        animation: rightLight 1s;
        -webkit-animation: rightLight 1s;
    }

    @keyframes leftLight {
        0% {
            transform: translate(0, -320px);
        }
        90% {
            transform: translate(0, 20px);
        }
        100% {
            transform: translate(0, 0px);
        }
    }

    @keyframes centerLight {
        0% {
            transform: translate(0, -185px);
        }
        90% {
            transform: translate(0, 30px);
        }
        100% {
            transform: translate(0, 0px);
        }
    }

    @keyframes rightLight {
        0% {
            transform: translate(0, -185px);
        }
        90% {
            transform: translate(0, 30px);
        }
        100% {
            transform: translate(0, 0px);
        }
    }

    .text {
        color: #FFE9DB;
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        font-family: ming,serif;
        font-weight: bolder;
    }

    .title {
        font-size: 52px;
        letter-spacing: 5px;
        text-shadow: 0 5px 3px #800100;
        animation: bigFont 1.5s;
        -webkit-animation: bigFont 1.5s;
    }

    .dsp {
        color: #FECDA8;
        letter-spacing: 3px;
        font-size: 18px;
        margin-top: 5px;
        animation: bigFont 1.5s;
        -webkit-animation: bigFont 1.5s;
    }

    @keyframes bigFont {
        0% {
            transform: scale(0,0);
        }
        80% {
            transform: scale(1.2, 1.2);
        }
        100% {
            transform: scale(1, 1);
        }
    }
    .bottom{
        position: absolute;
        width: 90%;
        z-index: 200;
        bottom: 45px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .year{
        position: absolute;
        width: 90%;
        z-index: 100;
        bottom: 95px;
        left: 0;
        right: 0;
        margin: 0 auto;
        animation: yearMove 1s;
        -webkit-animation: yearMove 1s;
    }
    @keyframes yearMove {
        0% {
            transform: translate(0px, 390px);
        }
        90% {
            transform: translate(0px, 0px);
        }
        100% {
            transform: translate(0px, 0px);
        }
    }
</style>
