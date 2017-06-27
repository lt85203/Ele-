<template>
  <div id="app">
    <w-header></w-header>
    <router-view></router-view>
    <w-footer></w-footer>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  import footer from './components/footer/footer.vue';
  import WFooter from './components/footer/footer';
  export default {
    components: {
      WFooter,
      'w-header': header,
      'w-footer': footer
    }
  };
</script>

<style>
  html, body {
    font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', Arial, sans-serif;
  }
</style>
