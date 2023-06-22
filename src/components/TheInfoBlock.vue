<script setup lang="ts">
import TheBlockContainer from './TheBlockContainer.vue';
import TheCloseButton from './TheCloseButton.vue';
</script>

<template>
  <TheBlockContainer class="info-block">
    <p class="info-block__text"></p>
    <TheCloseButton />
  </TheBlockContainer>
</template>

<style>
.info-block {
  display: flex;
  padding: 18px;
  position: relative;
}

.info-block__text {
  width: 100%;
  flex-grow: 1;
  max-width: 700px;
  border-radius: 12px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444 51.04%, #333 100%);
}
</style>
