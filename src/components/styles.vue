<!-- <template>
    <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<script>

</script>
<style>
</style> -->
<!-- 1 弹性布局 -->
<template>
    <!-- 项目在主轴的对齐方式，flex-start沿主轴的起点对齐
     每个项目的距离相等
     center沿主轴的中心点对齐，每个项目距离相等 
     space-around第一个项目到主轴起点和最后一个项目到主轴终点的
     距离相等，每个项目的距离相等，其中到起点终点的距离为每个
     项目距离的一半
     space-between每个项目的距离相等，第一个项目对齐主轴起点，
     最后一个项目对齐主轴终点
     align-items属性，设置项目沿垂直方向的交叉轴对齐方式-->
    <div class="wrap">
        <div class="box"><img src="./1f6863349132c98cc1d98b77c5309e02.png" alt=""><span>餐饮</span></div>
        <div class="box"><img src="./4e7d9026d38a08defecc4b546eca7b7f.png" alt=""></div>
        <div class="box"><img src="./6286c190255416792a1eb93ada944057.png" alt=""></div>
        <div class="box"><img src="./6bc51a151dad4ed65013095ae22d1571.png" alt=""></div>
        <div class="box"><img src="./7cc0e2d2db4824de820567310ef480bf.png" alt=""><span></span></div>
        <div class="box"><img src="./b1af70ce03b553bd6ad76e602ec6d559.png" alt=""><span>汽车</span></div>
        <div class="box"><img src="./c0dc4df6ff3484050c4ffdf949cb0f79.png" alt=""></div>
        <div class="box"><img src="./e81d365e61eda147efe1eee7ccd77806.png" alt=""></div>
        <div class="box"><img src="./f6b4446320f86860431ef473740ba19b.png" alt=""></div>
    </div>
 </template>
 <style>
 .box img {
    width: 100px;
    height: 100px;
 }
 .wrap {
    width:400px;
    margin: 0 auto;
    border: 1px solid rgb(255, 0, 0);
    height: 400px;
    display: flex;
    flex-direction: row;
   align-items: center;
   justify-content: space-around;
   flex-wrap: wrap;
 }
 .box {
    width: 100px;
    height: 100px;
    border: 1px dashed rgb(255, 255, 255);
    margin: 10px;
    text-align: center;
 }
</style>
<script setup>

</script>