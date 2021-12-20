<template>
    <div class="main">
        <el-carousel direction="vertical" :autoplay="false" indicator-position="none" ref="year"
                     :initial-index="index">
            <el-carousel-item>
                <new-year ref="newYear" :key="newYear"></new-year>
            </el-carousel-item>
            <el-carousel-item>
                <last-year :key="lastYear"></last-year>
            </el-carousel-item>
        </el-carousel>
        <div class="action"
             @click="handleClick">
            <img src="../assets/home/arr.png" style="width: 25px">
            <div>
                点击滚动
            </div>
        </div>
    </div>
</template>

<script>
    import newYear from "@/view/newYear";
    import lastYear from "@/view/lastYear";

    export default {
        name: "home",
        components: {
            newYear,
            lastYear
        },
        data() {
            return {
                index: 0,
                key: 0,
                newYear: 'newYear',
                lastYear: 'lastYear'
            }
        },
        methods: {
            handleClick() {
                this.key++;
                this.newYear = 'newYear' + this.key;
                this.lastYear = 'lastYear' + this.key;
                this.$refs.year.next()
            },
            goUp() {
                alert('上划')
            },
            goDown() {
                alert('下划')
            }
        }
    }
</script>

<style scoped lang="less">
</style>
