<template>
    <div>
        <p>LOGIN</p>
        <button @click="login">LOGIN</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            login(){
                //登录成功
                window.isLogin = true;
                //获取回调地址
                const  redirect = this.$route.query.redirect;
                if(redirect){
                    this.$router.push(redirect);
                }else{
                    //去首页
                    this.$router.replace("/");
                }
            }
        }
    }
</script>

<style scoped>

</style>
