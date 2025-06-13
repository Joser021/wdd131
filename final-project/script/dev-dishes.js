// get the current date and the last modified time
const today = new Date();
const year = document.querySelector(".currentyear");
const lastModified = document.querySelector(".lastModified");

year.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

// array with the recipes informations that i want to learn
const recipesLearn = [
    {
        recipeName: "Brownie",
        recipeDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis nesciunt rerum voluptatum necessitatibus cumque distinctio voluptas, at earum iste.",
        imageURL: "images/brownie.webp"
    },
    {
        recipeName: "Brazilian cheese bread",
        recipeDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis nesciunt rerum voluptatum necessitatibus cumque distinctio voluptas, at earum iste.",
        imageURL: "images/brazilian-cheese-bread.webp"
    },
    {
        recipeName: "Burrito",
        recipeDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis nesciunt rerum voluptatum necessitatibus cumque distinctio voluptas, at earum iste.",
        imageURL: "images/burritos.webp"
    },
    {
        recipeName: "Carrot Cake Recipe",
        recipeDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis nesciunt rerum voluptatum necessitatibus cumque distinctio voluptas, at earum iste.",
        imageURL: "images/carrot-cake.webp"
    },
    {
        recipeName: "Feijoada",
        recipeDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis nesciunt rerum voluptatum necessitatibus cumque distinctio voluptas, at earum iste.",
        imageURL: "images/feijoada.webp"
    },
    {
        recipeName: "Lemon Mousse",
        recipeDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis nesciunt rerum voluptatum necessitatibus cumque distinctio voluptas, at earum iste.",
        imageURL: "images/lemon-mousse.webp"
    }
];
createRecipeCard(recipesLearn); // call the function

// creates the card and add content to the html
function createRecipeCard() {
    const container = document.querySelector(".learning");
    if (!container) return;

    recipesLearn.forEach(recipe => {
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let img = document.createElement("img");

        card.setAttribute("class", "learning-recipes")
        name.textContent = recipe.recipeName;
        description.textContent = recipe.recipeDescription;
        img.setAttribute("src", recipe.imageURL);
        img.setAttribute("alt", `${recipe.recipeName} Recipe`);
        img.setAttribute("loading", "lazy");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(description);

        document.querySelector(".learning").appendChild(card);
    });
};

// recipes that I learned
const learned = [
    {
        recipeName: "Banana Bread",
        description: "Banana bread is a moist, sweet quick bread made with ripe bananas, known for its soft texture and comforting flavor. It’s a perfect way to use overripe bananas and often includes warm spices like cinnamon or add-ins like chocolate chips or nuts. ",
        imageURL: "images/banana-bread.webp",
        URL: "recipes/banana-bread.html",
    },
    {
        recipeName: "Cookies",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis nesciunt rerum voluptatum necessitatibus cumque distinctio voluptas, at earum iste.",
        imageURL: "images/cookies.webp",
        URL: "recipes/cookies.html",
    },
    {
        recipeName: "Strogonoff",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis nesciunt rerum voluptatum necessitatibus cumque distinctio voluptas, at earum iste.",
        imageURL: "images/strogonoff.webp",
        URL: "recipes/strogonoff.html",
    }
];

recipesLearned(learned);

function recipesLearned() {
    const container = document.querySelector(".learned");
    if (!container) return;

    learned.forEach(recipe => {
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let img = document.createElement("img");
        let link = document.createElement("a");

        card.setAttribute("class", "recipes-container");
        link.textContent = recipe.recipeName;
        link.setAttribute("href", recipe.URL)
        description.textContent = recipe.description;
        img.setAttribute("src", recipe.imageURL);
        img.setAttribute("alt", `${recipe.recipeName} Recipe`);
        img.setAttribute("loading", "lazy");

        // console.log(link)
        name.appendChild(link)
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(description);

        document.querySelector(".learned").appendChild(card);
    });
};



