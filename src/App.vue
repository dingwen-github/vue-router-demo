<template>
  <div id="app">

    <!--设置路由导航-->
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于我们</router-link>
    </div>
    <!--设置路由出口-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
  .nav{
    padding: 10px;
  }
  .nav a {
    color: orangered;
    font-size: 14px;
    margin: 0 30px;
  }

  /*当前路由所在的 a标签显示颜色*/
  .nav a.router-link-exact-active{
    color: #000;
  }
</style>
