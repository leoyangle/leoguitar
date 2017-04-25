<template>
  <div id="banner" @mouseover="clearInv" @mouseout="runInv">
    <a href="#" id="imgWrap">
      <transition-group name="fade">
        <img v-for="(img,index) in banner" v-if="index==bannerIndex" :src="banner[bannerIndex].src" :key="img">
      </transition-group>
    </a>
    <ul class="banner-indicator">
      <li v-for="(img,index) in banner" :class="{active: index==bannerIndex}" @click="bannerChange(index)"></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      banner: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        bannerIndex: 0
      }
    },
    methods: {
      bannerAutoChange: function () {
        var that = this;
        that.invId = setInterval(function () {
          var len = that.banner.length;
          if (++that.bannerIndex == len) {
            that.bannerIndex = 0;
          }
        }, that.inv);
      },
      bannerChange: function (index) {
        var that = this;
        this.bannerIndex = index;
        clearInterval(that.invId);
        that.invId = setInterval(function () {
          var len = that.banner.length;
          if (++that.bannerIndex == len) {
            that.bannerIndex = 0;
          }
        }, that.inv);
      },
      clearInv: function () {
        clearInterval(this.invId);
      },
      runInv: function () {
        clearInterval(this.invId);
        this.bannerAutoChange();
      }
    },
    mounted () {
      this.bannerAutoChange();
    }
  }
</script>

<style scoped>
  #banner {
    position: relative;
    margin: 15px 15px 15px 0;
    height: 500px;
    width: 900px;
    overflow: hidden;
  }

  #banner #imgWrap img {
    height: 100%;
    width: 100%;
  }

  #banner .banner-indicator {
    position: absolute;
    left: 0;
    bottom: 10px;
    right: 0;
    z-index: 100;
    text-align: center;
    cursor: pointer;
  }

  #banner .banner-indicator li {
    position: relative;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 20px;
    left: 20px;
    border: 2px solid rgb(158, 158, 158);
    border-radius: 50%;
    background-color: rgba(196, 196, 196, 0.76);
  }

  #banner .banner-indicator .active {
    box-shadow: 0 0 0 2px #fff;
    background-color: transparent;
    border: 2px solid transparent;
  }

  #banner .banner-indicator .active::after {
    transform: scale(0.5);
    background-color: #fff;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .fade-enter-active {
    transition: all ease-in-out 1.5s;
    animation: myfirst 1.5s ease 0s 1 normal;
  }

  .fade-enter {
    opacity: 0.6;
  }

  @keyframes myfirst {
    0% {
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.0);
    }
  }
</style>
