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
            <el-carousel-item>
                <wish :key="wish"></wish>
            </el-carousel-item>
            <el-carousel-item>
                <family :key="family"></family>
            </el-carousel-item>
            <el-carousel-item>
                <honey :key="honey"></honey>
            </el-carousel-item>
            <el-carousel-item>
                <end :key="end"></end>
            </el-carousel-item>
        </el-carousel>
        <div class="action"
             @click="handleClick">
            <img src="../assets/home/arr.png" style="width: 25px">
            <div>
                点击滚动
            </div>
        </div>
        <div class="music">
            <audio loop="loop" autoplay="autoplay">
                <source src="../assets/music/bg.mp3" type="audio/mpeg">
            </audio>
        </div>
    </div>
</template>

<script>
    import newYear from "@/view/newYear";
    import lastYear from "@/view/lastYear";
    import wish from "@/view/wish";
    import family from "@/view/family";
    import honey from "@/view/honey";
    import end from "@/view/end";

    export default {
        name: "home",
        components: {
            newYear,
            lastYear,
            wish,
            family,
            honey,
            end
        },
        data() {
            return {
                index: 0,
                key: 0,
                newYear: 'newYear',
                lastYear: 'lastYear',
                wish:'wish',
                family:'family',
                honey:'honey',
                end:'end'
            }
        },
        methods: {
            handleClick() {
                this.key++;
                this.newYear = 'newYear' + this.key;
                this.lastYear = 'lastYear' + this.key;
                this.wish = 'wish' + this.key;
                this.family = 'family' + this.key;
                this.honey = 'honey' + this.key;
                this.end = 'end' + this.key;
                this.$refs.year.next()
            }
        }
    }
</script>

<style scoped lang="less">
    .music{
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0;
    }
</style>
