<template>
    <div class="nav">
        <router-link to="/index">INDEX</router-link>
        <router-link to="/list">LIST</router-link>
       <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
           <router-view></router-view>
       </transition>
    </div>
</template>
<style>
    .nav{
        font-size:30px ;
        color: #20ff72;
        border: 10px dashed #ff6700;
        width: 80%;
        margin: 0px auto;
        height: 180px;
    }
    a{
        float: left;
        margin: 0 40px;
    }
</style>
<script></script>   