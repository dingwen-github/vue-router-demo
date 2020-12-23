<template>
    <div>
        <p>DASHBOARD</p>
        <div class="nav">
            <router-link to="/dashboard/home">home</router-link>
            <router-link to="/dashboard/about">about</router-link>
            <router-link to="/dashboard/mine/dingwen/Java">mine</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "DashBoard"
    }
</script>

<style scoped>
    .nav a {
        margin: 0 30px;
        color: black;
        font-size: 14px;
    }

    .nav a.router-link-exact-active {
        color: orangered;
    }
</style>
