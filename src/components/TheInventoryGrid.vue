<script setup lang="ts">
import TheBlockContainer from './TheBlockContainer.vue';
</script>

<template>
  <TheBlockContainer class="inventory-grid"></TheBlockContainer>
</template>

<style>
.inventory-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>
