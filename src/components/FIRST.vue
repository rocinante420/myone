<template>
    <div>
        一个组件<br>
        {{message}}
    </div>
    <div>{{ obj.message }}</div>
    <div>{{ menubar }}</div>
    <div v-html="mess"></div>
    <p><input type="text" v-bind:placeholder="username"></p>
    <p><input type="password" v-bind:placeholder="password"></p>
    <button v-on:click='show'>666</button>
    <p v-if="type==='A'">顶级</p>
    <p v-else-if="type==='B'">优秀</p>
    <p v-else-if="type==='C'">良好</p>
    <p v-else="type==='D'">及格</p>
    <button @click="type='A'">aaa</button>
    <button @click="type='B'">bbb</button>
    <button @click="type='C'">ccc</button>
    <button @click="type='D'">ddd</button>
    <div v-for="(item,index) in list" :key="index">
        列表内容为{{ item }},索引为:{{ index }}
    </div>
    <div v-for="item in list2" :key="item.id">
        id是{{item.id}}-------列表内容为{{ item.content }}
    </div>
    <div>count的值为{{ count }}</div>
    <button v-on:click="addcount">count+1</button>
</template>
<style>

</style>
<script setup>
import { reactive, ref ,toRef} from 'vue';
const list=reactive(['HTML','CSS3','JS'])
const list2=reactive([{id:1,content:'华为'},{id:2,content:'小米'},{id:3,content:'三星'},{id:4,content:'vivo'}])
const show =() =>{
    alert("你点击了它！")
    //window.location.href='./../../../index.html';
}
const username='用户名'
const password='密码'
const mess ='<strong>后天是？<strong>'
const messages="zxcvbnm"
const message=ref('今天是星期二')
const obj=reactive({message:'明天是？'})
const menubar=toRef(obj,'message')
// let message='xqer'
setTimeout(()=>{
    // console.log(''+message)
    message.value='今天是星期三'
    obj.message='明天是星期三'
},1000)
const type=ref('D')
const count=ref(1)
const addcount=event=>{
    count.value++
    if(count.value%2 == 0){
        event.target.style.border='3px dashed'
    }else{
        event.target.style.border='3px solid'
    }
}
</script>