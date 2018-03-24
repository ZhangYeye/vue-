<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="submit">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        content: ''
      }
    },

    props: {
      addComment: { // 属性名
        type: Function, // 属性值类型
        required: true // 属性的必要性
      }
    },

    methods: {
      submit () {
        // 检查输入数据
        const name = this.name.trim()
        const content = this.content.trim()
        if(!name || !content) {
          return
        }
        // 根据输入的数据封装成comment对象
        const comment = {name, content}
        // 添加到comments
        this.addComment(comment)
        // 清除输入
        this.name = ''
        this.content = ''
      }
    }
  }
</script>

<style>

</style>