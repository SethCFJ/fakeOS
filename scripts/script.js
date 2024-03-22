import showTime from "./clock.js";
import openMenu from "./menu.js";
import { openAndCloseApp } from "./appModal.js";
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
openAndCloseApp();
