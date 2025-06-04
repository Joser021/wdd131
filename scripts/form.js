// get the current year and the last moditication
const today = new Date();
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");

// display the current year and the last modification on the HTML
year.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;

// products list for the element tag on HTML
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


const optionals = document.querySelectorAll(".optional")

optionals.forEach(optional => {
  optional.innerHTML = "(Optional)";
})


populateSelect(products); // calls the function fill the <select>
showValidation(); // calls the function for times taken the survey

// function that fills the <select>
function populateSelect(products) {
  const select = document.querySelector("#product");
  if (!select) return;

  products.forEach(product => {
    let option = document.createElement("option");
    option.setAttribute("value", product.id);
    option.setAttribute("name", product.name);
    option.text = product.name;
    document.querySelector("#product").appendChild(option);
  });
};

// function that shows how many times you took the survey
function showValidation() {
  const validation = document.querySelector(".validation");
  if (!validation) return;

  const visitDisplay = document.querySelector(".visits");

  let visitNumbers = Number(window.localStorage.getItem("visits-ls"));

  if (visitNumbers !== 0) {
    visitDisplay.textContent = `${visitNumbers + 1} times`;
  } else {
    visitDisplay.textContent = "for the first time"
  }

  visitNumbers++;

  localStorage.setItem("visits-ls", visitNumbers);
};
