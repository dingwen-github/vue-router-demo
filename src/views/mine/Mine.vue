<template>
    <div>
        <p>Mine</p>
        <hr>
        <p>动态路由参数</p>
        <hr>
        <p>props true</p>
        {{name}}
        {{subject}}
        {{score}}
        {{rank}}
    </div>
</template>

<script>
    export default {
        name: "Mine",
        props: ['name','subject','score','rank'],
        created() {
            console.log(this.$route);
            console.log(this.$route.params.name);
            console.log(this.$route.query.score);
        },
        beforeRouteEnter(to,from,next){
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            console.log('Mine路由进入前调用');
            console.log(to, from, next);
            next();

        },
        beforeRouteUpdate(to,from,next){
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            console.log('路由参数发生改变的时候调用');
            console.log(to, from, next);
            next();
        },
        beforeRouteLeave(to,from,next){
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            console.log('路由离开是调用');
            console.log(to, from, next);
            next();
        },
    }
</script>

<style scoped>

</style>
