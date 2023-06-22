<script setup lang="ts"></script>

<template>
  <div class="modal">
    <div class="modal__content"></div>
  </div>
</template>

<style>
.modal {
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal__content {
  height: 100%;
  width: 260px;
  background: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid #4d4d4d;
}
</style>
