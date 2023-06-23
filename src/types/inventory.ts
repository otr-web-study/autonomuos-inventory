export type InventoryType = 'green' | 'brown' | 'blue';
export type InventorySize = 'small' | 'big';

export interface Inventory {
  type: InventoryType;
  title: string;
  count: number;
}

export interface InventoryStorable {
  [key: string]: Inventory;
}

export interface InventoryDragArgument {
  inventory: Inventory;
  idx: number;
}
