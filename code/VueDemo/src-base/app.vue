<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <hello></hello>
  </div>
</template>
<script>
  import hello from './components/hello.vue'

  export default {
    components: {
      hello
    }
  }
</script>
<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>