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
        recipeDescription: "A brownie is a rich, chocolatey dessert with a dense, fudgy texture, often enhanced with nuts or chocolate chips, and cut into squares for a sweet, indulgent treat.",
        imageURL: "images/brownie.webp"
    },
    {
        recipeName: "Brazilian cheese bread",
        recipeDescription: "A chewy, gluten-free snack made from tapioca flour and cheese, with a crispy exterior and a soft, cheesy interior. It's a popular treat in Brazil, often served warm.",
        imageURL: "images/brazilian-cheese-bread.webp"
    },
    {
        recipeName: "Burrito",
        recipeDescription: "A flour tortilla wrapped around fillings like rice, beans, meat, and cheese, creating a portable, hearty meal that’s packed with flavor and texture.",
        imageURL: "images/burritos.webp"
    },
    {
        recipeName: "Carrot Cake Recipe",
        recipeDescription: "A moist, spiced cake made with grated carrots, often topped with rich cream cheese frosting, balancing sweetness with warm spices like cinnamon.",
        imageURL: "images/carrot-cake.webp"
    },
    {
        recipeName: "Feijoada",
        recipeDescription: "A flavorful Brazilian stew made with black beans, pork, and beef, slow-cooked to perfection and served with rice, collard greens, and orange slices.",
        imageURL: "images/feijoada.webp"
    },
    {
        recipeName: "Lemon Mousse",
        recipeDescription: "A light, airy dessert made with lemon, cream, and sugar, offering a refreshing balance of sweet and tangy flavors with a smooth, velvety texture.",
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
        description: "Cookies are sweet, baked treats made from dough that typically include ingredients like flour, sugar, butter, and eggs. They come in various shapes and flavors, often with add-ins like chocolate chips, nuts, or dried fruit. Known for their crisp or chewy texture, cookies are a popular snack enjoyed worldwide.",
        imageURL: "images/cookies.webp",
        URL: "recipes/cookies.html",
    },
    {
        recipeName: "Strogonoff",
        description: "Strogonoff is a creamy, savory dish made with tender pieces of meat, usually beef or chicken, cooked in a rich sauce of sour cream, mustard, and ketchup. Often served with rice and bathed in the flavorful sauce, it's a comforting, hearty meal known for its smooth texture and tangy taste.",
        imageURL: "images/strogonoff.webp",
        URL: "recipes/strogonoff.html",
    },
    {
        recipeName: "Pancakes",
        description: "A pancake is a flat, round cake made from a batter of flour, eggs, milk, and baking powder, cooked on a griddle or frying pan. It's usually soft inside and golden brown outside, often served with toppings like syrup, fruit, or butter, and enjoyed as a breakfast dish.",
        imageURL: "images/pancakes.webp",
        URL: "recipes/pancakes.html",
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

// opens and closes the hamburger menu
const hamburger = document.querySelector("#ham-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));

// back to the previous page
goPreviousPage()
function goPreviousPage() {
    const prevButton = document.querySelector("#backButton");
    if (!prevButton) return;

    prevButton.addEventListener("click", () => {
        if (document.referrer) {
            window.history.back();
        } else {
            window.location.href = "index.html"
        }
    });
};

countSurvey()

// localStorage
function countSurvey() {
    const validation = document.querySelector(".review-site");
    if (!validation) return;

    const visitDisplay = document.querySelector(".counter");

    let visitNumbers = Number(window.localStorage.getItem("visits-ls"));

    if (visitNumbers !== 0) {
        visitDisplay.textContent = `${visitNumbers + 1} Times.`;
    } else {
        visitDisplay.textContent = "for the first time."
    }

    visitNumbers++;

    localStorage.setItem("visits-ls", visitNumbers);
};