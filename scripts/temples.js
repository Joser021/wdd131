const hamburger = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll("a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

const today = new Date()
const year = document.querySelector("#currentYear")
const LastModified = document.querySelector("#lastModified")

year.innerHTML = today.getFullYear();
LastModified.innerHTML = document.lastModified