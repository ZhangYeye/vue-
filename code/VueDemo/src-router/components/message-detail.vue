<template>
  <ul>
    <li>id: {{message.id}}</li>
    <li>title: {{message.title}}</li>
    <li>content: {{message.content}}</li>
  </ul>
</template>

<script>
  // 模拟所有的消息数组
  const allMessages = [
    {id: 1, title: 'message01', content: 'message01 content....'},
    {id: 3, title: 'message03', content: 'message02 content....'},
    {id: 5, title: 'message05', content: 'message03 content....'}
  ]
  export default {
    data () {
      return {
        message: {}
      }
    },
    mounted () { // 初始化显示时读取路由参数显示
      const id = this.$route.params.id*1
      this.message = allMessages.find(m => m.id===id)
    },
    watch: {
      // 监视路由的变化
      '$route' (to, from) {
        // 对路由变化作出响应...
        const id = to.params.id*1
        this.message = allMessages.find(m => m.id===id)
      }
    },
  }
</script>

<style>

</style>