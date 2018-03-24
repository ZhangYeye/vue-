<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>


      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <keep-alive>
              <router-view msg="atguigu"></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>