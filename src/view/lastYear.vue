<template>
    <commonContainer>
        <!--焰火效果图片-->
        <template v-for="(f,index) in fire">
            <img :key="'l-fire'+index" class="fire"
                 :style="{width:f.size,height:f.size,left:f.left,top:f.top,right:f.right,}"
                 src="../assets/home/fire.png">
        </template>
        <!--信纸容器-->
        <div class="text-container">
            <div class="text-title">
                再见,2021
            </div>
            <div class="text-content">
                <div v-for="(t,index) in text" :key="'text'+index" :class="0===index?'text-left':''">
                    {{t}}
                </div>
            </div>
        </div>
        <!--信封图片-->
        <img src="../assets/home/text-bot.png" class="text-bot">
        <!--女孩图片-->
        <img src="../assets/lastYear/girl.png" class="girl">
        <!--气球-->
        <template v-for="(b,index) in ball">
            <img :key="'ball'+index" class="ball"
                 :style="{width:b.width,left:b.left,bottom:b.bottom,right:b.right,}"
                 :src="b.src">
        </template>
    </commonContainer>
</template>

<script>
    import commonContainer from "@/components/commonContainer";

    export default {
        name: "lastYear",
        components: {
            commonContainer
        },
        data() {
            return {
                text:[
                    "王倩同学:",
                    "2021年马上就要过去了",
                    "在这里提前祝你双旦节快乐",
                    "愿你抛弃过去一年中一切烦恼",
                    "让快乐女神与你拥抱",
                    "新的一年天天开心"
                ],
                //焰火图片
                fire: [
                    {
                        size: '90px',
                        left: 0,
                        top: '-10px'
                    },
                    {
                        size: '100px',
                        left: '-40px',
                        top: '300px'
                    }, {
                        size: '90px',
                        left: 'auto',
                        right: 0,
                        top: '20px'
                    }],
                ball: [
                    {
                        width: '50px',
                        left: '17%',
                        bottom: '23%',
                        src: require("../assets/lastYear/yellow.png")
                    },
                    {
                        width: '50px',
                        left: '60%',
                        bottom: '35%',
                        src: require("../assets/lastYear/red.png")
                    },
                    {
                        width: '50px',
                        right: '15%',
                        bottom: '25%',
                        src: require("../assets/lastYear/yellow.png")
                    }]
            }
        }
    }
</script>

<style scoped lang="less">
    .girl {
        position: absolute;
        bottom: 90px;
        width: 170px;
        height: 315px;
        left: 0;
        right: 0;
        margin: 0 auto;
        animation: girlMove 3.5s;
        -webkit-animation: girlMove 3.5s;
    }


    @keyframes girlMove {
        0% {
            transform: translate(0, 1000px);
        }
        90% {
            transform: translate(0, -25px);
        }
        100% {
            transform: translate(0, 0px);
        }
    }

    .ball {
        position: absolute;
        animation: ballMove 2.5s;
        -webkit-animation: ballMove 2.5s;
    }

    @keyframes ballMove {
        0% {
            transform: translate(0, 1000px);
        }
        90% {
            transform: translate(0, -15px);
        }
        100% {
            transform: translate(0, 0px);
        }
    }
    @media screen and (min-height: 800px) {
        .girl {
            bottom: 150px;
        }
    }
    @media screen and (max-height: 680px) {
        .girl {
            bottom: 40px;
        }
    }
</style>
