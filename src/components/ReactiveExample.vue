<template>
    <h1> {{ $count }}</h1>
    <button @click="$saySomething()"> Decir algo</button>
    <h3>{{ obj }}</h3>
    <button @click="obj.count++"> Increment</button>
    <button @click="obj.count = 0"> Reset </button>
</template>
  
<script lang="ts" setup>
import { reactive } from 'vue';

// Reactive

const obj = reactive({
    count: 0
});

</script>
  
<style scoped>
</style>
  