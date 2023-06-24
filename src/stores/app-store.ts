import { ref, reactive, watch } from 'vue';
import { defineStore } from 'pinia';
import { getLocalData, setLocalData } from '@/utils/localData';
import type { Inventory, InventoryStorable } from '@/types/inventory';

const initialItems: InventoryStorable = {
  1: { type: 'green', title: 'Green', count: 4 },
  2: { type: 'brown', title: 'Brown', count: 2 },
  3: { type: 'blue', title: 'Blue', count: 5 }
};

export const useAppStore = defineStore('app-store', () => {
  const items = ref<InventoryStorable>(getLocalData('autonomuos-inventory/items', initialItems));
  const infoMessage = ref<string | null>('Welcome to our AUTONOMUOS-INVENTORY!');
  const modalOpened = ref(false);

  const setInfoMessage = (message: string | null) => {
    infoMessage.value = message;
  };

  const addInventoryToCell = (key: string, inventory: Inventory) => {
    if (!items.value[key]) {
      items.value[key] = reactive(inventory);
      return;
    }

    if (!(items.value[key].type === inventory.type)) return;

    items.value[key].count += inventory.count;
  };

  const removeInventoryFromCell = (key: string, inventory: Inventory) => {
    if (!items.value[key] || items.value[key].type !== inventory.type) return;

    items.value[key].count -= inventory.count;
    if (!items.value[key].count) {
      delete items.value[key];
    }
  };

  const resetItemsToDefault = () => {
    items.value = initialItems;
  };

  watch(
    items,
    () => {
      setLocalData('autonomuos-inventory/items', items.value);
    },
    { deep: true }
  );

  return {
    items,
    infoMessage,
    modalOpened,
    setInfoMessage,
    addInventoryToCell,
    removeInventoryFromCell,
    resetItemsToDefault
  };
});
