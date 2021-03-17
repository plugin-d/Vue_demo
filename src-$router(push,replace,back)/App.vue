
<template>
  <div style="padding: 20px">
    <!-- 头部 -->

    <div class="row">
      <!-- 左侧固定 -->
      <div class="col-md-4">
        <div>
          <router-link to="/home">Home</router-link>
        </div>
        <div>
          <router-link to="/about">About</router-link>
        </div>
      </div>
      <!-- 右侧内容 -->
      <div class="col-md-8">
        <h1>路由组件测试</h1>
        <router-view msg="test"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.router-link-active {
  color: red;
}
</style>