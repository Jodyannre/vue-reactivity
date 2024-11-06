<template>
    <h1> SOLID </h1>
    <h3>{{ count() }}</h3>
    <button @click="$event => setCount((value) => value +1)"> Incrementar </button>
    <h1> Angular </h1>
    <h3>{{ countA() }}</h3>
    <button @click="countA.update((n) => n+1)"> Increment</button>
    <button @click="countA.set(0)"> Reset </button>
</template>
  
<script lang="ts" setup>
// Hay 2 formatos para trabajar con signals, el SOLID y el angular

// SOLID
import { createSignal } from 'vue-signals/solid';
import { signal} from 'vue-signals/angular';

const [count, setCount] = createSignal(0);

// Angular
const countA = signal(0);

</script>
  
<style scoped>
</style>
  