import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/stores/app-store';
import { useDraggingStore } from '@/stores/dragging-store';
import type { InventoryDragArgument } from '@/types/inventory';

export const useDragNDrop = () => {
  const store = useAppStore();
  const { items: inventoryItems } = storeToRefs(store);
  const activeZones = ref<number[]>([]);
  const draggingStore = useDraggingStore();

  const setActiveZone = (idx: number) => {
    if (
      activeZones.value.indexOf(idx) === -1 &&
      (!inventoryItems.value[idx] || draggingStore.draggedType === inventoryItems.value[idx].type)
    ) {
      activeZones.value.push(idx);
    }
  };

  const onDragStart = (e: DragEvent, dataTransfer: InventoryDragArgument) => {
    if (!e.dataTransfer) return;

    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('dragArgument', JSON.stringify(dataTransfer));
    draggingStore.draggedType = dataTransfer.inventory.type;
  };

  const onDrop = (e: DragEvent, index: number) => {
    draggingStore.draggedType = null;

    const dragArgument: InventoryDragArgument | null = JSON.parse(
      e.dataTransfer?.getData('dragArgument') || 'null'
    );
    if (!dragArgument) return;

    const { idx, inventory } = dragArgument;

    if (inventoryItems.value[index] && inventoryItems.value[index].type !== inventory.type) return;

    store.addInventoryToCell(index.toString(), { ...inventory, count: 1 });
    store.removeInventoryFromCell(idx.toString(), { ...inventory, count: 1 });

    activeZones.value = activeZones.value.filter((z) => z !== index);
  };

  const onDragEnter = (e: DragEvent, idx: number) => {
    e.preventDefault();
    setActiveZone(idx);
  };

  const onDragOver = (e: DragEvent, idx: number) => {
    e.preventDefault();
    setActiveZone(idx);
  };

  const onDragLeave = (e: DragEvent, idx: number) => {
    activeZones.value = activeZones.value.filter((z) => z !== idx);
  };

  return { activeZones, onDragStart, onDrop, onDragEnter, onDragLeave, onDragOver };
};
