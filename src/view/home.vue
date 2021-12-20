<template>
    <div class="main">
        <el-carousel direction="vertical" :autoplay="false" indicator-position="none" ref="year" :initial-index="index">
            <el-carousel-item>
                <new-year ref="newYear" :key="newYear"></new-year>
            </el-carousel-item>
            <el-carousel-item>
                <last-year :key="lastYear"></last-year>
            </el-carousel-item>
        </el-carousel>
        <div style="position: absolute;left: 46%;bottom:13%;z-index: 999;color: white;cursor: pointer"
             @click="handleClick">
            <i class="el-icon-arrow-up" style="font-size: 36px;font-weight: bolder"></i>
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
        }
    }
</script>

<style scoped lang="less">


</style>
