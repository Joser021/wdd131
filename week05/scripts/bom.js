const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    })
};

function setchapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
};

function deleteChapter(chapter) {
    
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setchapterList();
}

button.addEventListener('click', function () {
    if (input.value.trim() !== "") {
        
        displayList(input.value);
        chaptersArray.push(input.value);
        setchapterList();
        input.value = "";
        input.focus();
    }
})
