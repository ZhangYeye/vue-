<template>
  <div>
    <h2>about组件</h2>
    <p>接收外部数据: {{msg}}</p>
    <input type="text">
  </div>
</template>

<script>
  export default {
    // 声明接收属性
    props: ['msg']
  }
</script>

<style>

</style>