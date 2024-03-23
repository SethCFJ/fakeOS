const appModal = document.querySelector(".appModal");

//To Do List Variables
const toDoListBtn = document.getElementById("toDoList");
const toDoListIcon = document.getElementById("toDoListIcon");
const closeToDoList = document.getElementById("closeToDoList");
const toDoListModal = document.getElementById("toDoListModal");
//calculator variables
const calculatorIcon = document.getElementById("calculatorIcon");
const calculatorModal = document.getElementById("calculatorModal");
const closeCalculator = document.getElementById("closeCalculator");
const calculatorBtn = document.getElementById("calculator");
//Rock Paper Scissors Variables
const rockPaperScissorsModal = document.getElementById(
  "rockPaperScissorsModal"
);
const rockPaperScissorsIcon = document.getElementById("rockPaperScissorsIcon");
const rockPaperScissorsBtn = document.getElementById("rockPaperScissors");
const closeRPS = document.getElementById("closeRPS");

export function openAppCloseApp() {
  //to do list listeners
  toDoListBtn.addEventListener("click", () => {
    toDoListModal.classList.add("appModal_visible");
  });
  toDoListIcon.addEventListener("click", () => {
    toDoListModal.classList.add("appModal_visible");
  });
  closeToDoList.addEventListener("click", () => {
    toDoListModal.classList.remove("appModal_visible");
  });
  //rock paper scissors listeners
  rockPaperScissorsIcon.addEventListener("click", () => {
    rockPaperScissorsModal.classList.add("appModal_visible");
  });
  rockPaperScissorsBtn.addEventListener("click", () => {
    rockPaperScissorsModal.classList.add("appModal_visible");
  });
  closeRPS.addEventListener("click", () => {
    rockPaperScissorsModal.classList.remove("appModal_visible");
  });

  //calculator listeners
  calculatorIcon.addEventListener("click", () => {
    calculatorModal.classList.add("appModal_visible");
  });
  calculatorBtn.addEventListener("click", () => {
    calculatorModal.classList.add("appModal_visible");
  });
  closeCalculator.addEventListener("click", () => {
    calculatorModal.classList.remove("appModal_visible");
  });
}
