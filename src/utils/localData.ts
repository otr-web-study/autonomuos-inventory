import type { InventoryStorable } from '@/types/inventory';

interface GetLocalData {
  (key: string, defaultValue: InventoryStorable): InventoryStorable;
}

interface SetLocalData {
  (key: string, value: InventoryStorable): void;
}

export const getLocalData: GetLocalData = (key, defaultValue) => {
  const localData = localStorage.getItem(key);
  if (!localData) {
    return defaultValue;
  }

  return JSON.parse(localData) || defaultValue;
};

export const setLocalData: SetLocalData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
