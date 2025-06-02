"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white shadow rounded w-64 mx-auto mt-10">
      <h2 className="text-xl font-bold">Quantity Counter </h2>
      <p className="text-lg">Quantity: {quantity}</p>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded bg-blue-500 text-white ${
            quantity === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"
          }`}
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded bg-yellow-500 text-white ${
            quantity === 20 ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
