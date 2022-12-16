const checkForItems = function () {
  const todoItems = document.querySelectorAll(".todo__item");
  const messageEmptyList = document.querySelector(".todo__items-row-empty");

  if (todoItems.length === 0) {
    messageEmptyList.style.display = "block";
  } else {
    messageEmptyList.style.display = "none";
  }
};

export default checkForItems;
