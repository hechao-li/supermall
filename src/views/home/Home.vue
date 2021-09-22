<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <FeatureView />

    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick">
    </tab-control>

    <GoodsList :goods="showGoods" />

  </div>
</template>
<script>
  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"

  import TabControl from "components/content/tabcontrol/TabControl"
  import GoodsList from "components/content/goods/GoodsList"



  import {
    getHomeMultidata,
    getHomeGoods
  } from "../../network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,

      TabControl
    },
    data() {
      return {
        result: null,
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop'
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      //创建组件之后，开始请求数据
      this.HomeMultidata()

      this.HomeGoods('pop');
      this.HomeGoods('new');
      this.HomeGoods('sell');
    },
    methods: {
      /**
       * 事件监听
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
        }
      },
      /**
       *网络请求相关 
       */
      /**
       * 请求轮播图列表
      */
      HomeMultidata() { 
        getHomeMultidata().then(res => {
          this.recommends = res.data.data.recommend.list;
          this.banners = res.data.data.banner.list;
        })
      },
      /**
       * 请求商品，流行，新款，精选
      */
      HomeGoods(type) { 
        const page = this.goods[type].page + 1 //列表+1
        getHomeGoods(type, page).then(res => {
          console.log(res.data.data)
          this.goods[type].list.push(...res.data.data.list); //数组解离，装进数组中

          this.$refs.scroll.finishPullUp()//上拉加载更多 
        })
      },
    },

  }

</script>

<style scoped>
  #home {
    padding-top: 44px;
    /*内边距*/
  }

  .home-nav {
    /*background-color: var(--color-tint);   !*在base.css设置该变量的值*!*/
    background-color: red;
    color: #f6f6f6;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 10;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  h2 {
    text-align: center;
  }

</style>
