<script setup lang="ts">
import TheContainer from './components/TheContainer.vue';
import TheSidebar from './components/TheSidebar.vue';
import TheInventoryGrid from './components/TheInventoryGrid.vue';
import TheInfoBlock from './components/TheInfoBlock.vue';
</script>

<template>
  <section class="page">
    <TheContainer>
      <TheSidebar />
      <TheInventoryGrid />
      <TheInfoBlock />
    </TheContainer>
  </section>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
