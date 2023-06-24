<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import TheBlockContainer from './TheBlockContainer.vue';
import TheInventory from './TheInventory.vue';
import TheModal from './TheModal.vue';
import { useAppStore } from '@/stores/app-store';
import { useDragNDrop } from '@/hooks/useDragNDrop';
import type { Inventory, InventoryDragArgument } from '@/types/inventory';

const store = useAppStore();
const { items: inventoryItems } = storeToRefs(store);
const selectedInventory = ref<InventoryDragArgument | null>(null);

const { activeZones, onDrop, onDragEnter, onDragLeave, onDragOver } = useDragNDrop();

const handleInventoryClick = (inventory: Inventory, idx: number) => {
  selectedInventory.value = { inventory, idx };
};
</script>

<template>
  <TheBlockContainer class="inventory-grid">
    <div
      v-for="idx in 20"
      :key="idx"
      class="inventory-grid__cell"
      :class="{ 'inventory-grid__cell_active': activeZones.includes(idx) }"
      dropzone="true"
      @drop="onDrop($event, idx)"
      @dragleave="onDragLeave($event, idx)"
      @dragenter="onDragEnter($event, idx)"
      @dragover="onDragOver($event, idx)"
    >
      <TheInventory
        v-if="inventoryItems[idx]"
        :inventory="inventoryItems[idx]"
        :idx="idx"
        @click="handleInventoryClick(inventoryItems[idx], idx)"
      />
      <span v-if="inventoryItems[idx]" class="inventory-grid__item-counter">{{
        inventoryItems[idx].count
      }}</span>
    </div>
    <TheModal
      v-if="selectedInventory"
      :inventory="selectedInventory.inventory"
      :idx="selectedInventory.idx"
      @close-modal="selectedInventory = null"
    />
  </TheBlockContainer>
</template>

<style>
.inventory-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 124.5px);
}

.inventory-grid__cell {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4d4d4d;
}

.inventory-grid__item-counter {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  font-size: 10px;
  font-weight: 500;
  right: 0;
  bottom: 0;
  border-radius: 6px 0px 0px 0px;
  border: 1px solid #4d4d4d;
  color: white;
  opacity: 0.5;
}

.inventory-grid__cell_active {
  background: #5a5959;
}
</style>
