<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { Enemie } from '@/types/Enemie'
import type { OrderTerm } from '@/types/OrderTerm'

const props = defineProps({
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

const gifUrl = (fileName: string) => {
  return new URL(`../assets/mobs/mobs-gifs/${fileName}.gif`, import.meta.url).href
}

const orderedEnemies = computed(() => {
  return [...props.enemies].sort((a: Enemie, b: Enemie) => {
    return a[props.order] > b[props.order] ? 1 : -1
  })
})
</script>

<template>
  <div class="enemie-list">
    <p align="center">Order by {{ order }}</p>
    <transition-group name="mobsList" tag="ul">
      <li v-for="enemie in orderedEnemies" :key="enemie.id">
        <h2>{{ enemie.title }}</h2>
        <div class="feature">
          <div class="info">
            <p>Respawn Locations:</p>
            <div class="locs" v-for="(loc, index) in enemie.location" :key="index">
              {{ loc }}
            </div>
            <p class="base-health">Base Health: {{ enemie.baseHealth }} DBS</p>
          </div>
          <div class="image-container">
            <img
              class="static-image"
              :src="imageUrl(enemie.title)"
              :alt="enemie.title"
              width="75"
              height="75"
            />
            <img
              class="gif-image"
              :src="gifUrl(enemie.title)"
              :alt="enemie.title"
              width="250"
              height="100"
            />
          </div>
        </div>
        <div class="descrip">
          <p>{{ enemie.behavior }}</p>
        </div>
      </li>
    </transition-group>
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
  font-family: HyliaSerif;
}
.feature {
  background: #e5e5cb;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px;
  border-radius: 5px;
}
.image-container {
  position: relative;
  display: inline-block;
}

.static-image {
  object-fit: contain;
  transition: transform 0.3s;
  cursor: pointer;
}

.gif-image {
  position: absolute;
  top: -10px;
  left: 85px;
  object-fit: contain;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s,
    visibility 0.3s;
  z-index: 10;
  background-color: #d5cea3;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.image-container:hover .gif-image {
  opacity: 1;
  visibility: visible;
}

.image-container:hover .static-image {
  transform: scale(1.2);
}

.info {
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  height: 100px;
}
.info p {
  font-size: large;
  font-weight: bold;
  margin: 0;
}
.locs {
  /* margin-left: 5px; */
}
.base-health {
  color: #1a120b;
  font-weight: bold;
  align-self: self-end;
}
.descrip {
  color: #3c2a21;
  font-weight: 500;
}
.mobsList-move {
  transition: all 0.5s;
}
</style>
