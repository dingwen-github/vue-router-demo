<template>
    <div>
        <p>About</p>
        <hr>
        <p>props传递参数</p>
        <p>对象传递</p>
        {{name}}
        {{subject}}
    </div>
</template>

<script>
    export default {
        name: "About",
        props: {
            name: String,
            subject: String
        },
    }
</script>

<style scoped>

</style>
