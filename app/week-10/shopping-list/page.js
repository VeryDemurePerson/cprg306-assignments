'use client';

import { useEffect, useState } from 'react';
import { useUserAuth } from '@/app/week-10/_utils/auth-context';
import { getItems, addItem } from '@/app/week-10/services/shopping-list-service';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import Link from 'next/link';

export default function Page() {
  const { user, loading } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      if (user) {
        const fetchedItems = await getItems();
        setItems(fetchedItems);
      }
    };
    fetchItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    const addedItem = await addItem(newItem);
    setItems(prev => [...prev, addedItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(',')[0]
      .replace(/[^\w\s]/gi, '')
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  if (loading) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold">Loading...</h1>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold">You must be logged in to view this page.</h1>
        <Link href="/week-9">← Go back to login</Link>
      </main>
    );
  }

  return (
    <main className="p-6 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
