<template>
  <div id="Datails">
    <h4>这里是商品详情页面</h4>

    <div class="det">
      <div class="datails" title="商品1">
        <img src="../../assets/image/tarbar/home_active.svg">
        <div>商品1</div>
      </div>
      <div class="datails" title="商品2">
        <img src="../../assets/image/tarbar/cart_active.svg">
        <div>商品2</div>
      </div>
      <div class="datails" title="商品3">
        <img src="../../assets/image/tarbar/profile_active.svg">
        <div>商品3</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Datails',
    props: [''],
    data() {
      return {};
    },

    components: {},

    computed: {},

    methods: {},

  }

</script>
<style lang='' scoped>

/*  #Datails {*/
/*    position: fixed;*/
/*    width: 270px;*/
/*    left: 80px;*/
/*    top: 50px;*/
/*    !* background-color: pink; *!*/

/*  }*/

/*  .det {*/
/*    display: flex;*/
/*  }*/

/*  .datails {*/
/*    cursor: pointer;*/
/*    flex: 1;*/
/*    text-align: center;*/
/*  }*/

/*  .datails img {*/
/*    height: 44px;*/
/*    width: 32px;*/
/*  }*/

</style>
