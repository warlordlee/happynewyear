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
        </div>
        <!--信封图片-->
        <img src="../assets/home/text-bot.png" class="text-bot">
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
            }
        }
    }
</script>

<style scoped lang="less">
</style>
