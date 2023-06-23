<script setup lang="ts">
import { ref } from 'vue';
import TheBlockContainer from './TheBlockContainer.vue';
import TheInventory from './TheInventory.vue';
import TheModal from './TheModal.vue';

const isModalOpened = ref(false);
</script>

<template>
  <TheBlockContainer class="inventory-grid">
    <div class="inventory-grid__cell" v-for="idx in 20" :key="idx">
      <TheInventory />
      <span class="inventory-grid__item-counter">1</span>
    </div>
    <TheModal v-if="isModalOpened" />
  </TheBlockContainer>
</template>

<style>
.inventory-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.inventory-grid__cell {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4d4d4d;
}

.inventory-grid__item-counter {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  font-size: 10px;
  font-weight: 500;
  right: 0;
  bottom: 0;
  border-radius: 6px 0px 0px 0px;
  border: 1px solid #4d4d4d;
  color: white;
  opacity: 0.5;
}
</style>
