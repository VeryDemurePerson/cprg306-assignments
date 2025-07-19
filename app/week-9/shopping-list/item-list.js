"use client";
import { useState } from "react";
import Item from "./item";


export default function ItemList({ items, onItemSelect }) {

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
  a[sortBy].localeCompare(b[sortBy])
);



  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          iName={item.name}
          iQuantity={item.quantity}
          iCategory={item.category}
          onSelect={onItemSelect} 
        />
      ))}
    </div>
  );
}
