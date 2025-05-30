// gets the id the Element from the HTML. for the hamburger menu
const hamburger = document.querySelector('#ham-menu');
const navMenu = document.querySelector('#nav-menu');

// opens and closes the hamburger menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// removes the hamburger menu when clicked in the link options
document.querySelectorAll("a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// gets the current year and the last modification date
const today = new Date();
const year = document.querySelector("#currentYear");
const LastModified = document.querySelector("#lastModified");

// add the current year and the last modification date in the HTML
year.innerHTML = today.getFullYear();
LastModified.innerHTML = document.lastModified;

// temples information variables1
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/temples/aba-nigeria-temple.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/temples/manti-utah-temple.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/temples/payson-utah-temple.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/temples/yigo-guam-temple.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/temples/washington-dc-temple.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/temples/lima-peru-temple.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/temples/mexico-city-temple.webp"
  },
    {
    templeName: "Atlanta Georgia",
    location: "Atlanta, Georgia",
    dedicated: "1983, June, 1",
    area: 34500,
    imageUrl:
    "images/temples/atlanta-temple.webp"
    },
    {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
    "images/temples/bountiful-temple.webp"
    },
    {
    templeName: "Campinas Brazil",
    location: "Campinas, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
    "images/temples/campinas-brazil-temple.webp"
    },
    {
    templeName: "Edmonton Alberta",
    location: "Edmonton, Alberta",
    dedicated: "1999, December, 11",
    area: 10700,
    imageUrl:
    "images/temples/edmonton-alberta-temple.webp"
    },
    {
    templeName: "jordan River Utah",
    location: "Jordan River, Utah",
    dedicated: "2018, May, 20",
    area: 148236,
    imageUrl:
    "images/temples/jordan-river-temple.webp"
    },
    // Add more temple objects here...
];

// function that creates the elements for the temples card
createTempleCard(temples);

function createTempleCard(filteredTemples) {
  document.querySelector(".temples-pics").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("figure");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
    location.setAttribute("class", "inf")
    dedication.setAttribute("class", "inf")
    area.setAttribute("class", "inf")
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);

    document.querySelector(".temples-pics").appendChild(card);
  })
};

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const category = link.textContent.trim().toLowerCase();

        document.querySelectorAll(".navbar a").forEach(a => a.classList.remove("active"));
        link.classList.add("active");
    });
});

// reset the filter
const home = document.querySelector("#home")

home.addEventListener("click", () => {
  createTempleCard(temples)
})

// filter the old temples
const oldTemples = document.querySelector("#old")

oldTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const dedicationYear = parseInt(temple.dedicated.split(",")[0]);
    return dedicationYear < 1900;
  }))
});

// filter the new temples
const newTemples = document.querySelector("#new")

newTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const dedicationYear = parseInt(temple.dedicated.split(",")[0]);
    return dedicationYear > 2000}))
})

// filter the large temples
const largeTemples = document.querySelector("#large")

largeTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    return temple.area > 90000
  }))
})

// filter the small temples
const smallTemples = document.querySelector("#small")

smallTemples.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    return temple.area < 10000
  }))
})