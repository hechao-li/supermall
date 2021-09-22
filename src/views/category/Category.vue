<template id="Category">
  <div>
    <h2>商品分类</h2>
    <List ref="Lin"></List>
    <button @click="check">按钮</button>

  </div>
</template>
<script>
  import List from './List'
  export default {
    name: "Category",
    components: {
      List
    },
    methods: {
      check() {
        console.log(this.$refs.Lin.checklist(2))
      }
    }

  }

</script>
<style>
  /*h2{*/
  /*  text-align: center;*/
  /*}*/

</style>
