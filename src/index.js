alert("I hope you have all your ingridients!Are you ready to cook?");

function generateRecipe(event) {
    event.preventDefault();

    alert("Generatig recipe... please wait");

    let recipeElement = document.querySelector("#poem");
    new Typewriter('#typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
    recipeElement.innerHTML = "Top-notch choice. 🥑 Just grab some bread, toast it up nice and crisp, then mash up a ripe avocado with a squeeze of lemon juice, salt, and pepper. Spread the avocado mix on your toast and you're good to go. Maybe add a poached egg or some chili flakes if you’re feeling fancy. Enjoy!"
    
}

let recipeFormElemnt = document.querySelector("#recipe-generator-form");
recipeFormElemnt.addEventListener("submit",generateRecipe);
