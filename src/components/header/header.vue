<template>
  <div class="header">
    <div class="headContent">
      <div class="head-top">
        <div class="head-left">
          <img src="./img_01.jpg" alt="">
        </div>
        <div class="head-right">
          <div class="head-title">
            <img src="./brand@2x.png" alt="">
            <h3>粥品香坊(大运村)</h3>
          </div>
          <div class="head-prop">蜂鸟专送 / 38分钟送达</div>
          <div class="head-discount">
            <img src="./decrease_1@2x.png" alt="">
            <p>在线支付满28减5，满50减10</p>
            <div class="hr-number">
              <span>5个  <i>></i></span>
            </div>
          </div>
        </div>
      </div>
      <div class="head-bottom">
        <img src="./bulletin@2x.png" alt="">
        <div class="ad">周品香彻底颠覆垫付的方法各方共同的官方的周品香彻底颠覆垫付的方法各方共同的官方的</div>
        <i>></i>
      </div>
    </div>
    <div class="Router">
      <ul>
        <li>
          <router-link to="/seller" class="active">商品</router-link>
        </li>
        <li>
          <router-link to="/goods">评价</router-link>
        </li>
        <li>
          <router-link to="/ratings">商家</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello'
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
  @import "../../common/css/Header";
</style>
