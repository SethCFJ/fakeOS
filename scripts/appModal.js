const toDoListBtn = document.getElementById("toDoList");
const appModal = document.querySelector(".appModal");
const closeModal = document.querySelector(".appModal_header_exit");
const toDoListIcon = document.getElementById("toDoListIcon");
const rockPaperScissorsIcon = document.getElementById("rockPaperScissorsIcon");
const calculatorIcon = document.getElementById("calculatorIcon");

const createElementWithText = (elType, text, parentNode) => {
  const newEl = document.createElement(elType);
  const elText = document.createTextNode(text);
  newEl.appendChild(elText);
  parentNode.appendChild(newEl);
};

export function openAndCloseApp() {
  toDoListBtn.addEventListener("click", () => {
    appModal.style.display = "block";
  });
  closeModal.addEventListener("click", () => {
    appModal.style.display = "none";
  });
  toDoListIcon.addEventListener("click", () => {
    appModal.style.display = "block";
  });
  rockPaperScissorsIcon.addEventListener("click", () => {
    appModal.style.display = "block";
    createElementWithText("p", "test text here", appModal);
  });
  calculatorIcon.addEventListener("click", () => {
    appModal.style.display = "block";
  });
  // window.onclick((event) => {
  //   if (event.target == appModal) {
  //     appModal.style.display = "none";
  //   }
  // });
}
