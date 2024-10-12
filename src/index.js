alert("I hope you have all your ingredients! Are you ready to cook?");

function displayRecipe(response) {
    const typewriter = new Typewriter('#recipe', {
        autoStart: true,
        delay: 50,
        cursor: "",
    });

    
    if (response.data && response.data.answer) {
        typewriter
            .typeString(response.data.answer)
            .start();
    } else {
        console.error("No recipe found in the response.");
        alert("Sorry, no recipe was found. Please try another ingredient.");
    }
}

function generateRecipe(event) {
    event.preventDefault();

    alert("Generating recipe... please wait");

    const apiKey = "307c2540doab8f13b37004f7fdft20c1";
    const ingredient = document.querySelector("#ingredient-input").value;
    const prompt = `Suggest a simple recipe using ${ingredient}.`;
    const context = "You are a hungry person looking for a quick recipe suggestion.";
    const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

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

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
