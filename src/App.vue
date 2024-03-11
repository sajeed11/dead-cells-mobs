<script setup lang="ts">
import { ref } from 'vue'
import type { OrderTerm } from '@/types/OrderTerm'
import { EnemiesData } from './data/data'
import EnemieList from './components/EnemieList.vue'

const order = ref<OrderTerm>('title')

const handleClick = (term: OrderTerm) => {
  order.value = term
}
</script>

<template>
  <div class="app">
    <header>
      <div class="title">
        <img src="./assets/Dead Cells Sticker.jpeg" alt="logo" />
        <h1>Dead Cells Mobs</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('baseHealth')">order by DBS</button>
        <button @click="handleClick('location')">order by location</button>
      </div>
    </header>
    <EnemieList :enemies="EnemiesData" :order="order" />
  </div>
</template>

<style scoped>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1a120b;
  border: 3px solid #1a120b;
  background: #d5cea3;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
header .title {
  display: flex;
  justify-content: center;
  align-items: center;
}
header img {
  width: 90px;
  height: 90px;
  margin-right: 20px;
}
header h1 {
  font-size: 3em;
}
</style>
