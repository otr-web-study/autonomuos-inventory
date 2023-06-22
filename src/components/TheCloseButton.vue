<script setup lang="ts"></script>

<template>
  <button class="close-btn"></button>
</template>

<style>
.close-btn {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
}

.close-btn:hover {
  opacity: 0.7;
}

.close-btn:before {
  position: absolute;
  content: '';
  height: 24px;
  border: 1px solid white;
  top: 0;
  transform: rotate(45deg);
}

.close-btn:after {
  position: absolute;
  content: '';
  height: 24px;
  border: 1px solid white;
  top: 0;
  transform: rotate(-45deg);
}
</style>
