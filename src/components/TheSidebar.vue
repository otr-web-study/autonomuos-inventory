<script setup lang="ts">
import TheBlockContainer from './TheBlockContainer.vue';
import TheButton from './TheButton.vue';
import { useAppStore } from '@/stores/app-store';

const store = useAppStore();
</script>

<template>
  <TheBlockContainer class="sidebar">
    <div class="sidebar__image-container">
      <img class="sidebar__image" src="/images/nicebg.png" alt="nicebg" />
      <div class="sidebar__image-blur" />
    </div>
    <div class="sidebar__skeleton">
      <h1 class="sidebar__title">AUTONOMUOS-INVENTORY</h1>
      <TheButton class="sidebar__reset-btn" @click="store.resetItemsToDefault()"
        >Сбросить</TheButton
      >
    </div>
  </TheBlockContainer>
</template>

<style>
.sidebar {
  padding: 18px 14px 24px 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
}

.sidebar__image-container {
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  width: 208px;
  height: 240px;
}

.sidebar__image {
  object-fit: contain;
  width: 100%;
}

.sidebar__image-blur {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.1);
}

.sidebar__skeleton {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 16px;
}

.sidebar__title {
  padding: 3px 3px;
  font-size: 14px;
  text-align: center;
  background: linear-gradient(90deg, #3c3c3c 0%, #444 51.04%, #333 100%);
  border-radius: 8px;
}

.sidebar__reset-btn {
  background: #3c3c3c;
  color: white;
}
</style>
