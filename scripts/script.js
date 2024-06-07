import showTime from "./clock.js";
import openMenu from "./menu.js";
import { openAppCloseApp } from "./appModal.js";
import { toDoList } from "./toDoList.js";
import calculate from "./calculate.js";
import createElement from "./dom-utils.js";
import rockPaperScissors from "./rockPaperScissors.js";
const startBtn = document.querySelector(".taskBar_startBtn");
const menuModal = document.querySelector(".menuModal");
const appModal = document.querySelector(".appModal");

const toggleClass = (elementList, className) => {
  for (let i = 0; i < elementList.length; i++) {
    elementList[i].classList.toggle(className);
  }
};

showTime("clock");
openMenu();
openAppCloseApp();
calculate();
toDoList();
rockPaperScissors();
