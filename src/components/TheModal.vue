<script setup lang="ts">
import { ref } from 'vue';
import TheInventoryView from './TheInventoryView.vue';
import TheButton from './TheButton.vue';
import TheCloseButton from './TheCloseButton.vue';
import type { InventoryDragArgument } from '@/types/inventory';
import { useAppStore } from '@/stores/app-store';

type ModalMode = 'confirm' | 'prompt';

const props = defineProps<InventoryDragArgument>();
const emits = defineEmits<{ (e: 'close-modal'): void }>();
const store = useAppStore();

const mode = ref<ModalMode>('confirm');
const count = ref(props.inventory.count);

const handleCloseBtnClick = () => {
  emits('close-modal');
};

const handleDeleteBtnClick = () => {
  if (count.value === 1) {
    store.removeInventoryFromCell(props.idx.toString(), props.inventory);
    emits('close-modal');
    return;
  }

  mode.value = 'prompt';
};

const handleConfirmBtnClick = () => {
  const validCount = Math.max(Math.min(count.value, props.inventory.count), 1);
  store.removeInventoryFromCell(props.idx.toString(), { ...props.inventory, count: validCount });
  mode.value = 'confirm';
  emits('close-modal');
};
</script>

<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__container">
        <TheInventoryView class="modal__inventory" :size="'big'" :type="props.inventory.type" />
        <div class="modal__description">
          <h2 class="modal__description-title">{{ props.inventory.title }}</h2>
          <p class="modal__description-item"></p>
          <p class="modal__description-item"></p>
        </div>
      </div>
      <div class="modal__controls">
        <TheButton
          class="modal__confirm-btn"
          v-if="mode === 'confirm'"
          @click="handleDeleteBtnClick"
          >Удалить предмет</TheButton
        >
        <div v-else class="modal__promt-container">
          <input class="modal__count" placeholder="Введите количество" v-model.number="count" />
          <TheButton @click="emits('close-modal')">Отмена</TheButton>
          <TheButton class="modal__confirm-btn" @click="handleConfirmBtnClick"
            >Подтвердить</TheButton
          >
        </div>
      </div>
      <TheCloseButton class="modal__close-btn" @click="handleCloseBtnClick" />
    </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(38, 38, 38, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid #4d4d4d;
  padding: 18px 15px;
}

.modal__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}

.modal__inventory {
  margin: 30px 0;
}

.modal__description {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
  width: 100%;
  border-top: 1px solid #4d4d4d;
  border-bottom: 1px solid #4d4d4d;
  padding: 16px 0;
}

.modal__description-title {
  padding: 4px 0;
  border-radius: 8px;
  font-size: 18px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444 51.04%, #333 100%);
  text-align: center;
}

.modal__description-item {
  padding: 3px;
  border-radius: 8px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444 51.04%, #333 100%);
  text-align: center;
  min-height: 10px;
}

.modal__controls {
  padding-top: 18px;
  display: flex;
  flex-direction: column;
}

.modal__confirm-btn {
  background: #fa7272;
  color: white;
}

.modal__promt-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 10px;
}

.modal__count {
  grid-column: 1 / span 2;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #4d4d4d;
  background: #262626;
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  opacity: 0.5;
}

.modal__close-btn {
  top: 8px;
  right: 8px;
}
</style>
