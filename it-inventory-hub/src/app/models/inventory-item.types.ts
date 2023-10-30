interface InventoryItem {
  id: string;
  name: string;
  type: InventoryItemType;
}

type InventoryItemType = 'headphones' | 'laptop' | 'screen';

export { InventoryItem, InventoryItemType };
