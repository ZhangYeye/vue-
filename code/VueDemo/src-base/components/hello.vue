<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello Vue Component'
      }
    }
  }
</script>

<style>
  .msg {
    color: red;
    font-size: 30px;
  }
</style>