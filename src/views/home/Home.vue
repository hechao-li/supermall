<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </NavBar>
      <h2>开始购物吧</h2>
      <br><hr>
      <h3>爱笑的你在呀？ </h3>
    <News />
    <Message />
  </div>
</template>
<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata} from "../../network/home";
  import News from './News'
  import Message from './Message'
  export default {
    name: "Home",
    components: {
      News,
      Message,
      NavBar
    },
    data(){
      return{
        result:null,
        banners:[],
        recommends:[]
      }
    },
    created() {
      //getHomeMultidata
      //请求多个数据
      getHomeMultidata().then(res=>{
        console.log(res)
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        console.log(this.banners)
        console.log(this.recommends)

      })
    },
    methods: {
      checkchang(evnt) {
        console.log("子组件自定义事件发送父组件，当前点击的是：", evnt);
      },
      addtion() {
        this.$store.commit('increment')
      },
      subtraction() {
        this.$store.commit('decrement')
      }
    }
  }

</script>
<style>
  .home-nav{
    /*background-color: var(--color-tint);   !*在base.css设置该变量的值*!*/
    background-color:red;
    color:#f6f6f6;
  }
  h2 {
    text-align: center;
  }

</style>
