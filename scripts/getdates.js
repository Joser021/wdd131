const today = new Date();
const year = document.querySelector("#currentyear");
const LastModified = document.querySelector("#LastModified")

year.innerHTML = today.getFullYear();
LastModified.innerHTML = document.lastModified;