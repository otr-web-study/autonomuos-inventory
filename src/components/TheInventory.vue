<script setup lang="ts">
import TheInventoryView from './TheInventoryView.vue';
import { useDragNDrop } from '@/hooks/useDragNDrop';
import type { InventoryDragArgument } from '@/types/inventory';

const props = defineProps<InventoryDragArgument>();

const { onDragStart } = useDragNDrop();
</script>

<template>
  <TheInventoryView
    :type="props.inventory.type"
    draggable="true"
    @dragstart="onDragStart($event, props)"
    class="inventory-view"
  />
</template>

<style>
.inventory-view {
  cursor: pointer;
}
</style>
