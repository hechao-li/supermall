<template>
  <tab-bar >
    <tab-bar-item path="/home" >
      <template v-slot:item-icon>
        <img  src="~assets/image/tarbar/home.svg">
      </template>
      <template v-slot:item-icon_active >
        <img src="~assets/image/tarbar/home_active.svg">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category" ref="List">
      <template v-slot:item-icon>
        <img  src="~assets/image/tarbar/category.svg">
      </template>
      <template v-slot:item-icon_active>
        <img  src="~assets/image/tarbar/category_active.svg">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>

    </tab-bar-item>
    <tab-bar-item path="/cart" >
      <template v-slot:item-icon>
        <img  src="~assets/image/tarbar/cart.svg">
      </template>
      <template v-slot:item-icon_active>
        <img  src="~assets/image/tarbar/cart_active.svg">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>

    </tab-bar-item>

    <tab-bar-item path="/profile" >
      <template v-slot:item-icon>
        <img src="~assets/image/tarbar/profile.svg">
      </template>
      <template v-slot:item-icon_active>
        <img src="~assets/image/tarbar/profile_active.svg">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>

  </tab-bar>
</template>
<script>
  import TabBar from '../../common/tabbar/TabBar.vue'
  import TabBarItem from '../../common/tabbar/TabBarItem.vue'
  export default {
    name: "MainTabBar",
    components:{
        TabBar,
        TabBarItem
    }
  }

</script>
<style>

</style>
