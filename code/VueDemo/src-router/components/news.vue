<template>
  <div>
    <ul>
      <li v-for="news in newsArr">{{news}}</li>
    </ul>
    <hr>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        newsArr: [
          'news01', 'news03', 'news05'
        ]
      }
    }
  }
</script>

<style>

</style>