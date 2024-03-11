<script setup lang="ts">
import { ref } from 'vue'
import type { Enemie } from './types/Enemie'
import EnemieList from './components/EnemieList.vue'
import type { OrderTerm } from '@/types/OrderTerm'

const enemies = ref<Enemie[]>([
  {
    id: '1',
    title: 'Shieldbearer',
    location: ['Promenade of the Condemned', 'Toxic Sewers', 'Ramparts'],
    baseHealth: 100,
    behavior: `Shieldbearers carry a physical shield that renders them immune to most attacks hitting its front, and briefly stuns the player when attacked with a melee weapon. The shield can be bypassed via certain methods, such as stun effects, being struck from behind, fire pools or certain weapons such as Firebrands.
    Their only attack is a ram attempt with their shield.
    They will briefly back step if the player is too close.`
  },
  {
    id: '2',
    title: 'Grenadier',
    location: [`Prisoners'  Quarters`, 'Ramparts', 'Promenade of the Condemned'],
    baseHealth: 100,
    behavior: `Grenadiers can detect the player at longer distances, even through walls or on a different platform. At BSC 4+, they will not teleport after the player.
    Grenadiers can backstep to avoid the player when close.
    Elite Grenadiers have only one change added to them, in that their bombs explode as soon as they hit the ground.`
  },
  {
    id: '3',
    title: 'Inquisitor',
    location: ['Ramparts', 'Graveyard'],
    baseHealth: 100,
    behavior: `Inquisitors' only attack is a magical bolt projectile. They back step when the player gets too close to them.`
  },
  {
    id: '4',
    title: 'Cleaver',
    location: ['Forgotten Sepulcher', 'Throne Room', 'Morass of the Banished'],
    baseHealth: 200,
    behavior: `The Cleaver's only behavior is it will throw its axe at the player when aggroed. It will not attack again until the axe has returned to the Cleaver (or its equivalent time if the Cleaver was moved or disabled).`
  },
  {
    id: '5',
    title: 'Thorny',
    location: ['Dilapidated Arboretum', 'Ossuary'],
    baseHealth: 125,
    behavior: `When at medium or long distance from the player, the Thorny will use its rolling attack. If it's close to the player, it may backstep or turn around after a startup when it takes damage from its front side.`
  },
  {
    id: '6',
    title: 'Weirded Warrior',
    location: ['Stilt Village', 'Corrupted Prison', 'Forgotten Sepulcher'],
    baseHealth: 120,
    behavior: `The Weirded Warrior can perform a dash combo after detecting the player - it rushes to the player and back, dealing damage on both strikes.
    If attacked with ranged weapons, the Weirded Warrior attempts to block them with its katanas, but will be unable to take actions otherwise.`
  },
  {
    id: '7',
    title: 'Yeeter',
    location: ['Dilapidated Arboretum'],
    baseHealth: 170,
    behavior:
      'Yeeters are a unique enemy that has multiple different attacks that it uses based on its location in relation to the player and the neary environment. It primarily focuses on using ranged attacks to attack the player. It is unique that it will attack using nearby JerkshroomsTBS by throwing them at the player.'
  }
])

const order = ref<OrderTerm>('title')

const handleClick = (term: OrderTerm) => {
  order.value = term
}
</script>

<template>
  <div class="app">
    <header>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('baseHealth')">order by DBS</button>
        <button @click="handleClick('location')">order by location</button>
      </div>
    </header>
    <EnemieList :enemies="enemies" :order="order" />
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
</style>
