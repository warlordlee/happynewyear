<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from "@/view/home";

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
}
</style>
