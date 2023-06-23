<script setup lang="ts">
import TheInventoryView from './TheInventoryView.vue';
import type { InventoryDragArgument } from '@/types/inventory';

const props = defineProps<InventoryDragArgument>();

const onDragStart = (e: DragEvent) => {
  if (!e.dataTransfer) return;

  e.dataTransfer.dropEffect = 'move';
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('dragArgument', JSON.stringify(props));
};
</script>

<template>
  <TheInventoryView
    :type="props.inventory.type"
    draggable="true"
    @dragstart="onDragStart"
    class="inventory-view"
  />
</template>

<style>
.inventory-view {
  cursor: pointer;
}
</style>
