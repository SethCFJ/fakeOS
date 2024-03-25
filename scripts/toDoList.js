let inputBox = document.querySelector("#inputBox");
let list = document.querySelector("#toDoListUl");

import createElement from "./dom-utils.js";
export const toDoList = () => {
  let addItem = (inputBox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputBox}<div></div>`;

    listItem.addEventListener("click", function () {
      this.classList.toggle("done");
    });
    listItem.querySelector("div").addEventListener("click", function () {
      listItem.remove();
    });

    list.appendChild(listItem);
  };
  inputBox.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addItem(this.value);
      this.value = "";
    }
  });
};
