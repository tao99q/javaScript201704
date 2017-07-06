<template>
    <div>
        <h2>{{msg}}</h2>
    </div>
</template>
<!--npm install less less-loader --save-dev-->
<style scoped lang="less" rel="stylesheet/less">
    /*scoped 表示的是样式只给当前组件用*/
    div{
        background-color: #fffaa5;
        h2{
            font-size: 100px;
            color: crimson;
            line-height: 150px;
            margin: 20px 0;
            text-align: center;
        }
    }
</style>
<script>
    export default{
        //想实现组件的配置,就写在这里
        data(){
            return{
                msg:"首页信息展示"
            }
        }

    }
</script>