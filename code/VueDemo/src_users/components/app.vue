<template>
  <div class="container">
    <search :setSearchName="setSearchName"></search>
    <xxx-main :searchName="searchName"></xxx-main>
  </div>
</template>

<script>
  import search from './search.vue'
  import main from './main.vue'
  export default {

    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      setSearchName (searchName) {
        console.log(this)
        this.searchName = searchName
      }
    },

    components: {
      search,
      'xxx-main': main
    }
  }
</script>

<style>

</style>