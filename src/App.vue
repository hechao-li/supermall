<template>
  <div id="app">
    <router-view />
    <main-tab-bar ref="Lin"></main-tab-bar>
   
  </div>

</template>
<script>
  import MainTabBar from "./components/content/mainTabBar/MainTabBar";
  export default {
    name: 'app',
    components: {
      MainTabBar
    },
    methods: {
      check() {
        console.log(this.$refs.Lin)
      }
    }
  }

</script>

<style lang="scss">
  @import "assets/css/base.css";

</style>
