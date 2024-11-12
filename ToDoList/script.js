const input = document.getElementById("input-task");
const addButton = document.getElementById("button-task");
const itemList = document.getElementById("item-list")

const lightButton =document.getElementById("light");
const darkButton = document.getElementById("dark");
const colurfulButton = document.getElementById("colorful");

addButton.addEventListener("click", function(){
    console.log("Button clicked!");
    const itemText = input.value;

    if(itemText === "") {
        alert("Please enter an Task.")
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = itemText;

    itemList.appendChild(listItem);

    input.value = "";
});