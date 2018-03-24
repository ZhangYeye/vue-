<template>
  <div class="todo-footer">
    <label>
      <slot name="selectAll"></slot>
    </label>
    <span>
      <slot name="size"></slot>
    </span>
    <slot name="clear"></slot>
  </div>
</template>

<script>
  export default {
    props: ['clearAllCompleted'],
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