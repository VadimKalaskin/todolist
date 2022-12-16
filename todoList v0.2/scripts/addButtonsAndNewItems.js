import checkForItems from "./checkForItems.js";
checkForItems();

const addButton = document.querySelector(".todo__controls-button");
const itemTemplate = document.getElementById("todo__item-template").content;
const itemsRow = document.querySelector(".todo__items-row");
const inputValue = document.querySelector(".todo__controls-text");

const addDeleteButtons = function () {
  const deleteButtons = document.querySelectorAll(".todo__item-button");
  const todoItems = document.querySelectorAll(".todo__item");
  for (let i = 0; i < deleteButtons.length; i++) {
    let deleteButton = deleteButtons[i];
    deleteButton.addEventListener("click", function () {
      todoItems[i].remove();
      checkForItems();
    });
  }
};

const addAddButton = function () {
  addButton.addEventListener("click", function () {
    if (inputValue.value) {
      let newItem = itemTemplate.cloneNode(true);
      let newItemText = newItem.querySelector("p");
      newItemText.textContent = inputValue.value;
      itemsRow.appendChild(newItem);
      inputValue.value = "";
      addDeleteButtons();
      checkForItems();
    }
  });
  inputValue.addEventListener("keypress", function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      if (inputValue.value) {
        let newItem = itemTemplate.cloneNode(true);
        let newItemText = newItem.querySelector("p");
        newItemText.textContent = inputValue.value;
        itemsRow.appendChild(newItem);
        inputValue.value = "";
        addDeleteButtons();
        checkForItems();
      }
    }
  });
};

export default addAddButton;
