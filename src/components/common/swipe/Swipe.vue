<template>
  <div id="Swipe">
    <div class="img-wrap" @mouseover="mouseOver" @mouseleave="mouseLeave">
      <button class="left-btn" @click="leftSlide"> left </button>
      <button class="right-btn" @click="rightSlide"> right </button>

      <template v-for="(item,index) in img">
        <transition :name="transitionName">
          <img :src="require(`assets/image/swipe/${item}`)" alt="" v-show=" index == current">
        </transition>
      </template>
      <div class="title-wrap">
        <template v-for="(item,index) in img">
          <span v-show="index==current">{{item}}</span>
        </template>
        <div class="dot-wrap">
          <template v-for="(item,index) in img">
            <i :class="{'active':index==current}" @click="curr(index)"></i>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Swipe',
    data() {
      return {
        img: [
          "1.jpg",
          "2.jpg",
          "3.jpg",
          "4.jpg",
          "5.jpg",
          "6.jpg",
          "7.jpg"
        ],
        transitionName: 'slide-left',
        current: 0, //当前展示的下标
        autoTimer: null //自动轮播定时器
      };
    },

    computed: {
      maxIndex() {
        return this.img.length - 1;
      }
    },
    methods: {
      leftSlide() {
        this.transitionName = 'slide-left'
        if (this.current == 0) {
          this.current = this.maxIndex;
        } else {
          this.current--
        }
      },
      rightSlide() {
        this.transitionName = 'slide-right'
        if (this.current == this.maxIndex) {
          this.current = 0;
        } else {
          setTimeout(() => {
            this.current++
          }, 100)

        }
      },
      curr(index) {
        this.current = index;
      },
      mouseOver() {
        clearInterval(this.autoTimer);
      },
      mouseLeave() {
        this.timer();
      },
      timer() {
        let that = this;
        this.autoTimer = setInterval(function () {
          that.transitionName = 'slide-left'
          if (that.current == that.maxIndex) {
            that.current = 0;
          } else {
            that.current++
          }
        }, 4000)
      }
    },
    mounted() {
      this.timer()
    },

  }

</script>
<style scoped>
  .img-wrap {
    width: 500px;
    height: 300px;
    overflow: hidden;
    position: relative;

  }

  img {
    width: 500px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .left-btn {
    position: absolute;
    left: 20px;
    top: 140px;
    z-index: 99;
  }

  .right-btn {
    position: absolute;
    right: 20px;
    top: 140px;
    z-index: 99;
  }

  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all 2s ease;
  }

  .slide-left-enter {
    transform: translateX(100%);
  }

  .slide-left-leave-to {
    transform: translateX(-100%);
  }

  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: all 2s ease;
  }

  .slide-right-enter {
    transition: all 2s ease;
    transform: translateX(-500px);
  }

  .slide-right-leave-to {

    transform: translateX(500px);
  }

  .title-wrap {
    width: 500px;
    height: 50px;
    position: absolute;
    bottom: 0;
    color: rgb(255, 255, 255);
    line-height: 50px;
  }

  .dot-wrap {
    left: 30%;
    position: absolute;
    bottom: 10px;


  }

  i {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 5px;
  }

  .active {
    background-color: rgb(253, 0, 0);
  }

</style>
