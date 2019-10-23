<template>
  <div class="agv-layout">
    <header class="agv-bar">{{ title }}</header>
    <div class="agv-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'layou',
    data() {
      return {
        title: this.$route.meta.title
      }
    },
    created() {
    }
  }
</script>

<style lang="scss" scoped>
  .agv-layout {
    position: relative;
    margin: 0 auto;
    max-width: 640px;
    height: 100%;
  }
  .agv-bar {
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    text-align: center;
    font-size: 18px;
    line-height: 45px;
  }
  .agv-container {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-overflow-scrolling: touch;
  }
</style>
