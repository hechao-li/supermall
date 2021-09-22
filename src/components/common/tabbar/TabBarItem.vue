<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon_active"></slot>
    </div>
    <div :style="activeStyle">  <!--动态绑定样式，传入的颜色进行判断-->
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activecolor: {
        type: String,
        default: 'red'
      }
    },
    components: {},
    data() {
      return {
        // isActive: true,
        // path:'/home'
      }
    },
    methods: {
      itemclick() {
        this.$router.push(this.path) //切换路由路径
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? { color: this.activecolor } : {}  //三目运算符，传入字体颜色，否则为是颜色
      }
    }
  }

</script>
<style>
  .tab-bar-item {
    /*均等分*/
    flex: 1;
    text-align: center;
    /*水平居中*/
    height: 49px;
    font-size: 14px;
    cursor: pointer;
  }

  .tab-bar-item img {
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
    /* color: blue; */
    margin-top: 2px;
  }

  /* .active {
    color: red;
  } */

</style>
