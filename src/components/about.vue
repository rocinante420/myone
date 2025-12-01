<template>
    <div class="about">
        <h3>关于页面</h3>
    <router-link to="/about/tab1">信条</router-link>
    <router-link to="/about/tab2">盗梦空间</router-link>
    <hr>
    <router-view ></router-view>
    </div>
</template>
<style>
    .about{
        font-size: 15px;
        text-align: center;
        background: #fc0;
    }
</style>