import React, { useState } from 'react';
import { ShoppingItem } from '../types/MealPlan';

interface ShoppingListProps {
  items: ShoppingItem[];
  onUpdateItem: (id: string, bought: boolean) => void;
}

const ShoppingList: React.FC<ShoppingListProps> = ({ items, onUpdateItem }) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'bought'>('all');

  const filteredItems = items.filter(item => {
    if (filter === 'pending') return !item.bought;
    if (filter === 'bought') return item.bought;
    return true;
  });

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ShoppingItem[]>);

  return (
    <div className="shopping-list">
      <div className="shopping-header">
        <h2>Weekly Shopping List</h2>
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'pending' ? 'active' : ''}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button 
            className={filter === 'bought' ? 'active' : ''}
            onClick={() => setFilter('bought')}
          >
            Bought
          </button>
        </div>
      </div>

      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <div key={category} className="category-group">
          <h3 className="category-title">{category.toUpperCase()}</h3>
          <div className="items-list">
            {categoryItems.map(item => (
              <div key={item.id} className={`shopping-item ${item.bought ? 'bought' : ''}`}>
                <input
                  type="checkbox"
                  checked={item.bought}
                  onChange={(e) => onUpdateItem(item.id, e.target.checked)}
                />
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">
                  {item.quantity} {item.unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;