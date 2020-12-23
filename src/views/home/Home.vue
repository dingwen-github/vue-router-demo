<template>
    <div>
        <p>Home</p>
       <div class="nav">
           <router-link to="/dashboard/home/news">news</router-link>
           <router-link to="/dashboard/home/shop">shop</router-link>
       </div>
        <!--一定要设置路由出口-->
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Home",
    }
</script>

<style scoped>
    .nav a{
        margin: 0 30px;
        color: #000;
        font-size: 14px;
    }
    .nav a.router-link-exact-active{
        color: orangered;
    }
</style>
