function startCooking() {
  alert("Welcome to Dish Dash! 🍳 Let's start cooking!");
}

async function findRecipe() {
  const ingredient = document.getElementById("ingredientInput").value.trim();
  const result = document.getElementById("recipeResults");

  if (!ingredient) {
    result.innerHTML = "<p>Please enter an ingredient.</p>";
    return;
  }

  result.innerHTML = "<p>🔍 Searching for recipes...</p>";

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
    );

    const data = await response.json();

    if (!data.meals) {
      result.innerHTML = "<p>😢 No recipes found for that ingredient.</p>";
      return;
    }

    result.innerHTML = "";

    for (const meal of data.meals) {
      const detailsResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
      );

      const detailsData = await detailsResponse.json();
      const recipe = detailsData.meals[0];

      let ingredientsList = "";

      for (let i = 1; i <= 20; i++) {
        const ing = recipe["strIngredient" + i];
        const measure = recipe["strMeasure" + i];

        if (ing && ing.trim() !== "") {
          ingredientsList += `<li>${measure} ${ing}</li>`;
        }
      }

      result.innerHTML += `
        <div class="recipe-card">
          <img src="${recipe.strMealThumb}" width="100%" style="border-radius:15px;">
          <h2>${recipe.strMeal}</h2>

          <h3>🧂 Ingredients</h3>
          <ul>${ingredientsList}</ul>

          <h3>👩‍🍳 How to Cook</h3>
          <p>${recipe.strInstructions}</p>
        </div>
      `;
    }

  } catch (error) {
    result.innerHTML = "<p>❌ Something went wrong. Please try again.</p>";
    console.error(error);
  }
} 
