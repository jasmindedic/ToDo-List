"use strict";

// Put elements into variables
let itemList = document.querySelector(".item-list");
let item = document.querySelector(".item");
let deleteBtn = document.querySelector(".fa-trash");
let inputField = document.querySelector("#inputField")

// Add delete class to delete button
deleteBtn.classList.add("delete");

// Delete event
itemList.addEventListener("click", removeItem);

// Listener to add more Todos
inputField.addEventListener("keydown", (event) => {
    if (event.keyCode == 13){

        // Get input value
        let inputFieldValue = inputField.value;
        

        // Creating div to store item
        let div = document.createElement("div");
        div.classList.add("item");

        // Creating item and delete button
        let newItem = document.createElement("p");
        let newDeleteBtn = document.createElement("i");

        // Add icon class to show trash icon
        newDeleteBtn.className = "fa-solid fa-trash";
        // Add delete button
        newDeleteBtn.classList.add("delete");
        //  Add input value to new item
        newItem.appendChild(document.createTextNode(inputFieldValue));

        div.appendChild(newItem);
        div.appendChild(newDeleteBtn);

        itemList.appendChild(div);

        
    }
});

// Listener for clearing input field
inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        inputField.value = "";
    }
});


// Function to delte todos
function removeItem(e) {
    if(e.target.classList.contains("delete")){
        let item = e.target.parentElement;
        itemList.removeChild(item);
    }
}





