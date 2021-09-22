<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>

</template>
<script>
  import MainTabBar from "./components/content/mainTabBar/MainTabBar";
  export default {
    name: 'app',
    components: {
      MainTabBar
    },
    methods:{
      methodsName(){
        this.$refs.List.checklist(2)
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/css/base.css";
</style>
