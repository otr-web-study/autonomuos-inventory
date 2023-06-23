<script setup lang="ts">
import TheBlockContainer from './TheBlockContainer.vue';
import TheCloseButton from './TheCloseButton.vue';
import { useAppStore } from '@/stores/app-store';

const store = useAppStore();
</script>

<template>
  <TheBlockContainer v-show="store.infoMessage" class="info-block">
    <p class="info-block__text">{{ store.infoMessage }}</p>
    <TheCloseButton @click="store.setInfoMessage(null)" />
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
  max-width: 90%;
  border-radius: 12px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444 51.04%, #333 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
