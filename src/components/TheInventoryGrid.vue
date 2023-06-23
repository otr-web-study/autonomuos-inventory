<script setup lang="ts">
import { ref } from 'vue';
import TheBlockContainer from './TheBlockContainer.vue';
import TheInventory from './TheInventory.vue';
import TheModal from './TheModal.vue';
import { useAppStore } from '@/stores/app-store';
import { storeToRefs } from 'pinia';
import type { Inventory, InventoryDragArgument } from '@/types/inventory';

const store = useAppStore();
const { items: inventoryItems } = storeToRefs(store);
const selectedInventory = ref<InventoryDragArgument | null>(null);

const handleInventoryClick = (inventory: Inventory, idx: number) => {
  selectedInventory.value = { inventory, idx };
};

const onDrop = (e: DragEvent, index: number) => {
  const dragArgument: InventoryDragArgument | null = JSON.parse(
    e.dataTransfer?.getData('dragArgument') || 'null'
  );
  if (!dragArgument) return;

  const { idx, inventory } = dragArgument;

  if (inventoryItems.value[index] && inventoryItems.value[index].type !== inventory.type) return;

  store.addInventoryToCell(index.toString(), { ...inventory, count: 1 });
  store.removeInventoryFromCell(idx.toString(), { ...inventory, count: 1 });
};
</script>

<template>
  <TheBlockContainer class="inventory-grid">
    <div
      v-for="idx in 20"
      :key="idx"
      class="inventory-grid__cell"
      dropzone="true"
      @drop="onDrop($event, idx)"
      @dragover.prevent
      @dragenter.prevent
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
</style>
