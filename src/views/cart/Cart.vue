<template>
  <div class="cart">
    <NavBar>
      <template v-slot:left>
        <div class="left">左边</div>
      </template>
    </NavBar>

    <NavBar>
      <template v-slot:center>
        <div class="home-nav">中间保准</div>
      </template>
    </NavBar>
    <NavBar>
      <template v-slot:right>
        <div class="right">右边</div>
      </template>
    </NavBar>

  <h2>当前购物车为空</h2>
  <h3>一起来开始购物吧</h3>
  </div>
</template>
<script>
  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name: "Cart",
    components: {
      NavBar
    },

  }
</script>
<style>

h2{
  text-align: center;
}
.home-nav{
  flex: 1;

}
.left,.right{
  width: 60px;

}
</style>
