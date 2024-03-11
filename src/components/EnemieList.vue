<script setup lang="ts">
import type { PropType } from 'vue'
import type { Enemie } from '@/types/Enemie'
import type { OrderTerm } from '@/types/OrderTerm'

defineProps({
  enemies: {
    required: true,
    type: Array as PropType<Enemie[]>
  },
  order: {
    required: true,
    type: String as PropType<OrderTerm>
  }
})

const imageUrl = (fileName: string) => {
  return new URL(`../assets/mobs/${fileName}.png`, import.meta.url).href
}
</script>

<template>
  <div class="enemie-list">
    <p>Order by {{ order }}</p>
    <ul>
      <li v-for="enemie in enemies" :key="enemie.id">
        <h2>{{ enemie.title }}</h2>
        <div class="feature">
          <div class="info">
            <p>Respawn Locations:</p>
            <div class="locs" v-for="(loc, index) in enemie.location" :key="index">
              {{ loc }}
            </div>
            <p class="base-health">{{ enemie.baseHealth }} DBS</p>
          </div>
          <img :src="imageUrl(enemie.title)" :alt="enemie.title" width="75" height="75" />
        </div>
        <div class="descrip">
          <p>{{ enemie.behavior }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.enemie-list {
  max-width: 1024px;
  margin: 40px auto;
}
.enemie-list ul {
  padding: 0;
}
.enemie-list li {
  list-style: none;
  background: #d5cea3;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.enemie-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.feature {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px;
}
.feature img {
  object-fit: contain;
}
.info {
  display: flex;
  background: #e5e5cb;
  padding: 16px;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  height: 100px;
  border-radius: 5px;
}
.info p {
  font-size: large;
  font-weight: bold;
  margin: 0;
}
.locs {
  margin-left: 5px;
}
.base-health {
  color: #1a120b;
  font-weight: bold;
  margin-top: 10px;
}
.descrip {
  color: #3c2a21;
  font-weight: 500;
}
</style>
