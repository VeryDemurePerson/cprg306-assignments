"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;

    async function fetchMealIdeas(ingredient) {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}` 

        );
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching meal ideas:", error);
        setMeals([]);
      }
    }

    fetchMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">
        Meal Ideas for: <span className="capitalize">{ingredient}</span>
      </h2>
      <ul className="list-disc list-inside">
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
        {meals.length === 0 && <li>No meal ideas found.</li>}
      </ul>
    </div>
  );
}
