alert("I hope you have all your ingredients! Are you ready to cook?");

        function generateRecipe(event) {
            event.preventDefault();

            alert("Generating recipe... please wait");

            const typewriter = new Typewriter('#recipe', {
                autoStart: true,
                delay: 50, 
                cursor: "",
            });

            typewriter
                .typeString('Top-notch choice. 🥑 Just grab some bread, toast it up nice and crisp, then mash up a ripe avocado with a squeeze of lemon juice, salt, and pepper. Spread the avocado mix on your toast and you are good to go. Maybe add a poached egg or some chili flakes if you’re feeling fancy. Enjoy!')
                .start(); 
        }

        let recipeFormElement = document.querySelector("#recipe-generator-form");
        recipeFormElement.addEventListener("submit", generateRecipe);