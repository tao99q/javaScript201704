<template>
    <div>
        <h1 class="title">标题:LOVE</h1>
        <Home></Home>
        <Navs></Navs>
    </div>
</template>
<style>
    .title{
        font-size: 40px;
        color: fuchsia;
        width: 40%;
        margin: 20px auto;
        text-align: center;
        border: 5px dotted seagreen;
    }
</style>
<script>
    //在当前组件中嵌套其他组件,需要导入进来 import
    import Home from './componets/Home.vue';
    import Navs from './componets/Navs.vue';
    export default{
        components:{
            Home,
            Navs
        }
    }
</script>