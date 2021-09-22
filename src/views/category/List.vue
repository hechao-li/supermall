<template>
  <div id="List" >
    <ul>
      <li v-for='(item,index) in categorylist' @click="checklist(index)" @mouseover='mousemove(index)'
        @mouseleave='mouseleft(index)' :class="{active:isactive === index}">{{item}}</li>
    </ul>
    <Details v-if="active">
    </Details>
    <table border="1px">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>价格</th>
        </tr>
      </thead>
      <tr v-for="(item,index) in books" :key="index">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import Details from './Details'
  export default {
    name: 'List',
    props: [''],
    data() {
      return {
        categorylist: ['京东超市', '家居家装', '手机', '生鲜', '食品饮料', '美妆护肤', '个护清洁', '数码设备', '运动户外', '电脑办公'],
        books: [{
            id: 2,
            name: '平凡的世界',
            price: 78
          },
          {
            id: 3,
            name: '白鹿原',
            price: 58
          },
          {
            id: 4,
            name: '悲惨的世界',
            price: 62
          },
          {
            id: 5,
            name: '明朝那些事儿',
            price: 45
          },
          {
            id: 6,
            name: '曾国藩',
            price: 43
          }
        ],
        isactive: -1,
        active: false
      };
    },

    components: {
      Details
    },

    computed: {},

    methods: {
      checklist(index) {
        this.active = !this.active,
          console.log("点击商品:" + this.categorylist[index])
      },
      mousemove(index) {
        this.isactive = index;
      },
      mouseleft(index) {
        this.isactive = -1;
      }
    },

  }

</script>
<style scoped>

  h4 {
    height: 2px;
    left: 10px;
    position: relative;
  }

  ul {
    padding-inline-start: 12px;
  }

  ul li {
    cursor: pointer;
    width: 65px;
    list-style: none;
  }

  #List {
    width: 65px;
  }

  table {
    margin-left: 10px;
    margin-top: 10px;
    width: 350px;
    height: 300px;
    text-align: center;
    border-collapse: collapse;
  }

</style>
