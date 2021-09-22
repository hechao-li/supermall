<template>
  <div class="cart">
    <!-- <NavBar>
      <template v-slot:left>
        <div></div>
      </template>
      <template v-slot:center>
        <div>购物街</div>
      </template>
      <template v-slot:right>
        <div>右边</div>
      </template>

    </NavBar> -->
    <div class="wrapper">
      <ul class="content">
        <li v-for="item in 50">口袋灵兽{{item}}</li>
      </ul>
    </div>
    <!-- <h2>当前购物车为空</h2>
    <h3>一起来开始购物吧</h3>
    <Test /> -->
  </div>
</template>
<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Test from "./test"

  import BScroll from "better-scroll"
  export default {
    name: "Cart",
    data() {
      return {
        scroll: null
      }
    },
    mounted(){
      this.scroll = new BScroll(document.querySelector('.wrapper'), {    //在移动端滚动流畅
        probeType:3,//开始时时监听位置
        pullUpLoad:true //设置上拉加载更多
      })

      this.scroll.on('scroll',(position)=>{
        // console.log(position)
      })
      this.scroll.on('pullingUp',()=>{
        console.log("上拉加载更多")
      })
    },

    components: {
      // NavBar,
      // Test
    },

  }

</script>
<style>
  .wrapper {
    height: 150px;
    background-color: red;
    overflow: hidden;

    /* overflow: hidden;
        overflow-y: scroll;
        y轴上进行滚动，超过部分回自动隐藏*/
  }



  h2 {
    text-align: center;
  }

  .home-nav {
    flex: 1;

  }

  .left,
  .right {
    width: 60px;

  }

</style>
