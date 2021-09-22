<template>
  <div class="goods">
    <goods-list-item v-for="(item,id) in goods" :goodsItem="item" :key="id" />
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem"
  export default {
    name: 'GoodsList',
    props: {
      goods: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {

      };
    },

    components: {
      GoodsListItem
    },

    mounted() {
      console.log(this.goods)

    },

    methods: {},

  }

</script>
<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;  /*不换行*/

    justify-content: space-around;  /*每两个项目的间隔相等，项目之间间隔比项目边框的间隔大一倍*/
    padding: 2px;
  }

</style>
