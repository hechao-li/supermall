<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  export default {
    name:'Scroll',
    props:{
        probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        srcoll:null,
        msg:"cesium测试数据"
      };
    },
    mounted(){
      //1、创建BScroll对象
      this.scroll = new BScroll("this.$refs.wrapper",{
        clilk:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })
      //2、监听滚动位置
      this.scroll.on("scroll",(position)=>{
        this.$emit("scroll",position) //向子组件发送滚动事件和时时位置
      })

      //3、监听上拉事件
      this.scroll.on("pullingUp",()=>{
        this.$emit("pullingUp")
      })

    },
    methods: {
      scrollTo(s,y,time=300){
        this.scroll.scrollTo(x,t,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      }
    },
    components: {},

    computed: {},

 


  }

</script>
<style scoped>

</style>