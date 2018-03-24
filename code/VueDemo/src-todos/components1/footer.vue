<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllComplete"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="clearAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: ['todos', 'selectAll', 'clearAllCompleted'],

    computed: {

      completeSize () {
        /*
         // 命令式编程
         let sum = 0
         for (var i = 0; i < this.todos.length; i++) {
         var todo = this.todos[i]
         sum = sum + (todo.complete ? 1 : 0)
         return sum
         }
         return sum
         */
        // 使用声明编程
        return this.todos.reduce((preTotal, todo) => {
          return preTotal + (todo.complete ? 1 : 0)
        }, 0)
      },

      isAllComplete: {
        get () {
          return this.completeSize===this.todos.length && this.todos.length>0
        },
        set (value) {
          this.selectAll(value)
        }
      }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>