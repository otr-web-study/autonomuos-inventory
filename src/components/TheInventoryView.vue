<script setup lang="ts">
import { type InventoryType } from '@/types/inventory';

const props = withDefaults(defineProps<{ type?: InventoryType }>(), {
  type: 'small'
});
</script>

<template>
  <div
    class="inventory"
    :class="{
      nventory_type_big: props.type === 'big'
    }"
  ></div>
</template>

<style>
.inventory {
  position: relative;
  width: 54px;
  height: 54px;
  background: #7faa65;
}

.inventory::after {
  position: absolute;
  width: 54px;
  height: 54px;
  content: '';
  background: rgba(184, 217, 152, 0.35);
  backdrop-filter: blur(6px);
  top: -6px;
  right: -6px;
}

.inventory_type_big {
  width: 116px;
  height: 116px;
}

.inventory_type_big::after {
  width: 116px;
  height: 116px;
}
</style>
