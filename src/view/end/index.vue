<template>
    <div class="end-container">
        <img src="../../assets/end/xiangji.png" class="xj">
        <img src="../../assets/end/plan.png" class="fj">
        <div class="icon">
            <img src="../../assets/end/tiger.png">
        </div>
        <div class="head">
            HAPPY NEW YEAR
        </div>
        <div class="title">
            <template v-for="(t,index) in title">
                <div :key="'t'+index" class="circle">
                    <div class="title-text-font">
                        {{t}}
                    </div>
                </div>
            </template>
        </div>
        <div class="title-text">
        </div>
        <div class="dsp">
            <img src="../../assets/end/tiger-pic.png" class="t-pic">
            <template v-for="(text,index) in texts">
                <div :key="'text'+index" class="text" :class="0===index?'mg-top':''">
                    {{text}}
                </div>
            </template>
        </div>
        <div class="tools">
            <img src="../../assets/end/heart.png">
            <img src="../../assets/end/say.png">
        </div>
        <div class="wish">
            2022升职加薪工作如虎添翼
        </div>
        <div class="wish">
            新的一年头发依旧茂密！
        </div>
        <img src="../../assets/end/bottom.png" class="bottom">
        <img src="../../assets/end/tiger2.png" class="tiger2">
        <img src="../../assets/end/money.png" class="money">
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                title: ["虎", "力", "全", "开"],
                texts:[
                    "过去一年你写下了43252行代码",
                    "热爱使用javascript的你",
                    "一定是个向往自由的人",
                    "你经常debug到深夜",
                    "甚至直到天亮",
                    "新的一年了",
                    "保重身体",
                    "毕竟",
                    "世界辣么大",
                    "还等你去看看"
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .end-container {
        background-color: #E86800;
        height: 100%;
        width: 100%;
        font-family: siyuan, sans-serif;
        position: relative;
        overflow: hidden;
    }

    .head {
        color: #F1ECCA;
        font-size: 26px;
        padding: 15px;
        border-bottom: 2px solid #2f2f2f;
        width: 83%;
        margin: 0 auto;
    }

    .xj {
        position: absolute;
        left: 18px;
        top: 26px;
        width: 35px;
    }

    .fj {
        position: absolute;
        right: 18px;
        top: 26px;
        width: 35px;
    }

    .icon {
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        top: 80px;
        left: 20px;
        border: 2px solid #313131;
        background-color: #F9A91E;
        text-align: center;

        img {
            width: 80%;
            height: 80%;
            margin-top: 3px;
        }
    }

    .title {
        position: absolute;
        top: 110px;
        display: flex;
        left: 0;
        right: 0;
        width: 70%;
        justify-content: center;
        margin: 0 auto;
        padding-left: 25px;
    }

    .circle {
        background-color: #F7D000;
        border-radius: 50%;
        width: 75px;
        height: 75px;
        line-height: 60px;
        border: 2px solid #313131;
        margin-left: -13px;
        position: relative;

    }

    .title-text {
        background-color: #F7D000;
        position: absolute;
        width: 207px;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 131px;
        z-index: 200;
        height: 35px;
    }

    .title-text-font {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 300;
        font-size: 42px;
        line-height: 75px;
    }

    .dsp {
        width: 90%;
        height: 450px;
        top: 172px;
        margin-left: 5%;
        background: url("../../assets/end/bg.jpg");
        background-size: 100% 100%;
        margin-top: 100px;
    }

    .t-pic {
        position: absolute;
        width: 200px;
        top: 400px;
        right: 51px;
    }

    .bottom {
        position: absolute;
        bottom: -20px;
        left: 0;
        width: 100%;
    }

    .tools {
        display: flex;
        padding: 10px 15px;
        img{
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
    }
    .wish{
        border-radius: 8px;
        line-height: 30px;
        background-color: #4DB560;
        border: 2px solid black;
        text-align: left;
        width: 65%;
        margin-left: 19px;
        padding-left: 15px;
        margin-bottom: 7px;
        font-size: 18px;
    }
    .text{
        color: #f3b609;
        text-align: left;
        padding: 2px 15px;
        font-size: 20px;
        font-weight: bolder;
        letter-spacing: 2px;
    }
    .mg-top{
        padding-top: 30px;
    }
    .tiger2{
        position: absolute;
        right: 16px;
        bottom: 61px;
        width: 72px;
    }
    .money{
        position: absolute;
        right: 36px;
        bottom: 64px;
        width: 26px;
    }
</style>
