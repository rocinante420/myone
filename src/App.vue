<!-- <script setup>
import { RouterLink,routerView } from 'vue-router';
</script> -->

<template>
  <h1>fghjk</h1>
  <router-link to="/home"><a href="">首页页面</a></router-link>
  <router-link to="/about"><a href="">关于页面</a></router-link>
  <hr>
  <router-view></router-view>
  <!-- <computed />
  <styles /> -->
</template>

<style scoped>
.app-container{
  text-align: center;
  font-size: 10px;
}
.app-container a{
  width: 100px;
  height: 100px;
  background-color: aqua;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
