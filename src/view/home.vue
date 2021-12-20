<template>
    <el-carousel direction="vertical" :autoplay="false" indicator-position="none">
        <el-carousel-item>
           <new-year></new-year>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    import newYear from "@/view/newYear";
    export default {
        name: "home",
        components:{
            newYear
        },
    }
</script>

<style scoped lang="less">


</style>
