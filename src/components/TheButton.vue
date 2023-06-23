<script setup lang="ts"></script>

<template>
  <button class="app-button">
    <slot />
  </button>
</template>

<style>
.app-button {
  display: flext;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  transition: opacity 0.3s ease-in-out;
}

.app-button:hover {
  opacity: 0.8;
}
</style>
