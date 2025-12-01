<template>
    <div>
        <p>初始文本{{ message }}</p>
        <p>更改后的文本{{ resever }}</p>
    </div>
</template>
<script setup lang="ts">
import {computed, ref} from "vue";
const message =ref('today,sunday')
const resever =computed(()=>
    message.value.split('').reverse().join('')
)
const update =()=>{
    message.value="tommorrow"
}
</script>