import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { InventoryType } from '@/types/inventory';

export const useDraggingStore = defineStore('dragging-store', () => {
  const draggedType = ref<InventoryType | null>(null);

  return { draggedType };
});
