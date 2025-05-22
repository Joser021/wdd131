const today = new Date()
const Year = document.querySelector("#currentYear")
const lastModifed = document.querySelector("#lastModified")

Year.innerHTML = today.getFullYear()
lastModifed.innerHTML = document.lastModified