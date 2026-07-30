function startCooking() {
  alert("Welcome to Dish Dash! 🍳 Let's start cooking!");
}
function startCooking() {
  alert("Welcome to Dish Dash! 🍳 Let's start cooking!");
}


const recipes = [
  {
    name: "Chicken Fried Rice 🍗",
    ingredients: ["chicken", "rice", "onion"],
    steps: "Cook the rice, fry the chicken and onion, then mix everything together."
  },
  {
    name: "Cheesy Omelette 🥚",
    ingredients: ["egg", "cheese", "onion"],
    steps: "Beat the eggs, add cheese and onion, then cook in a pan."
  },
  {
    name: "Tomato Pasta 🍝",
    ingredients: ["pasta", "tomato", "onion"],
    steps: "Boil pasta, make tomato sauce, then combine."
  }
];


function findRecipe() {
  let ingredients = document.getElementById("ingredientInput").value.toLowerCase();

  let matches = recipes.filter(recipe =>
    recipe.ingredients.some(item => ingredients.includes(item))
  );

  let result = document.getElementById("recipeResults");

  if (matches.length === 0) {
    result.innerHTML = "😢 No recipe found. Try adding more ingredients.";
  } else {
    result.innerHTML = matches.map(recipe => `
      <h3>${recipe.name}</h3>
      <p>${recipe.steps}</p>
    `).join("");
  }
}