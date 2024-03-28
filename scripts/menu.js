const startBtn = document.querySelector(".taskBar_startBtn");
const menuModal = document.querySelector(".menuModal");

const toDoListIcon = document.querySelector("#toDoList");
const rockPaperScissors = document.querySelector("#rockPaperScissors");
const calculator = document.querySelector("#calculator");

function openMenu() {
  startBtn.addEventListener("click", () => {
    menuModal.classList.toggle("menuModal_visible");
  });
}

export default openMenu;
