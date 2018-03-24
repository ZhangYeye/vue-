<template>
  <div>
    <p>clicked: {{count}} times, count is {{oddOrEven2}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: mapGetters({  // 名称不一样
      oddOrEven2: 'oddOrEven',
      count: 'count'
    }),

    methods: mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync']) // 名称一样
  }
</script>

<style>

</style>