<script setup lang="ts">
import type { InventorySize, InventoryType } from '@/types/inventory';

interface InventoryViewProps {
  size?: InventorySize;
  type: InventoryType;
}

const props = withDefaults(defineProps<InventoryViewProps>(), {
  size: 'small'
});
</script>

<template>
  <div
    class="inventory"
    :class="[
      `inventory_type_${type}`,
      {
        inventory_size_big: props.size === 'big'
      }
    ]"
  ></div>
</template>

<style>
.inventory {
  position: relative;
  width: 54px;
  height: 54px;
}

.inventory::after {
  position: absolute;
  width: 54px;
  height: 54px;
  content: '';
  backdrop-filter: blur(6px);
  top: -6px;
  right: -6px;
}

.inventory_size_big {
  width: 116px;
  height: 116px;
}

.inventory_size_big::after {
  width: 116px;
  height: 116px;
  top: -16px;
  right: -16px;
}

.inventory_type_green {
  background: #7faa65;
}

.inventory_type_green::after {
  background: rgba(184, 217, 152, 0.35);
}

.inventory_type_brown {
  background: #aa9785;
}

.inventory_type_brown::after {
  background: rgba(217, 187, 152, 0.35);
}

.inventory_type_blue {
  background: #656caa;
}

.inventory_type_blue::after {
  background: rgba(116, 129, 237, 0.35);
}
</style>
