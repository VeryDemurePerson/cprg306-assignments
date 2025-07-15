"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .replace(/[^\w\s]/gi, "")
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">You must be logged in to view this page.</h1>
        <Link href="/week-9">Go to login page</Link>
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
