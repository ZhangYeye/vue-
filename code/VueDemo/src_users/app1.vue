<template>
  <div>
    <div v-if="!repoName">loading...</div>
    <div v-else>
      most star repo is
      <a :href="url">{{repoName}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchName: 'vu',
        repoName: null,
        url: null
      }
    },

    mounted () {
      // 使用vue-resource发送ajax请求
      const url =  `https://api.github.com/search/repositories?q=${this.searchName}&sort=stars`
      this.$http.get(url)
        .then(
          response => {
            // 从响应中取出数据
            const result = response.body
            const repo = result.items[0]
            // 更新data数据
            this.repoName = repo.name
            this.url = repo.html_url
          },
          response => {
            console.log('请求失败22')
          }
        )
    }
  }
</script>

<style>

</style>