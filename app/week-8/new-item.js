"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCategoryChange = (event) => {
    console.dir(event.target.value);
    setCategory(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-white shadow rounded w-200 mx-auto mt-10"
    >
      <h2 className="text-xl font-bold text-center">Add New Item</h2>

      <div>
        <label className="block font-semibold">Item Name:</label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g., Milk"
        />
      </div>

      <div>
        <label className="block font-semibold">Quantity:</label>
        <div className="flex gap-2 items-center">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-3 py-1 rounded bg-purple-500 text-white ${
              quantity === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-600"
            }`}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-3 py-1 rounded bg-blue-500 text-white ${
              quantity === 20
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-orange-600"
            }`}
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label className="block font-semibold">Category:</label>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="w-full p-2 border rounded"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
