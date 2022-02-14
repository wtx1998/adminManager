<template>
  <div class="config">
    <h2>config</h2>
    {{count}}
    <button @click="add()">+</button>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  const count =ref(0)
  const add =()=>{
    count.value++
  }
</script>

<style scoped></style>
