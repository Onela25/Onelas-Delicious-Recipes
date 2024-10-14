alert("I hope you have all your ingredients! Are you ready to cook?");

document.addEventListener("DOMContentLoaded", function() {
    let recipeFormElement = document.querySelector("#recipe-generator-form");
    recipeFormElement.addEventListener("submit", generateRecipe);
});

function displayRecipe(response) {
    const typewriter = new Typewriter('#recipe', {
        autoStart: true,
        delay: 50,
        cursor: "",
    });

    if (response.data && response.data.answer) {
        typewriter
            .typeString(response.data.answer)
            .typeString("<br><strong>SheCodes AI</strong>")
            .start();
    } else {
        console.error("No recipe found in the response.");
        alert("Sorry, no recipe was found. Please try another ingredient.");
    }
}

function generateRecipe(event) {
    event.preventDefault();

    alert("Generating recipe... please wait");

    let apiKey = "307c2540doab8f13b37004f7fdft20c1";
    let ingredient = document.querySelector("#ingredient-input").value; 
    let prompt = `Suggest a simple recipe using ${ingredient}.`;
    let context = "You are a hungry person looking for a quick recipe suggestion.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;
    

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");


    axios.get(apiURL)
        .then(response => {
            console.log(response); 
            displayRecipe(response);
        })
        .catch(error => {
            console.error("Error fetching recipe:", error);
            alert("Sorry, there was an error generating the recipe. Please try again.");
        });
}


