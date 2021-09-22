<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control" :class="{ active:index=== current}"
      @click="itemclick(index)">
      <span>{{item}}</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        current: 0
      };
    },

    components: {},

    computed: {},

    methods: {
      itemclick(index) {
        this.current = index;
        this.$emit("tabClick",index)
      }
    },

  }

</script>
<style scoped>
  .tab-control {
    width: 100%;
    display: flex;

    height: 40px;
    line-height: 40px;
    font-size: 15px;
    cursor: pointer;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
    text-align: center;
  }

  .active span {
    padding: 2px;
    border-bottom: 3px solid rgb(221, 93, 93);
  }

  .active {
    color: rgb(226, 124, 141);
  }

</style>
