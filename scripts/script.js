import showTime from "./clock.js";
import openMenu from "./menu.js";
import { openAppCloseApp } from "./appModal.js";
import calculate from "./calculate.js";
import createElement from "./dom-utils.js";
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

const form = document.querySelector("#calc");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nums = document.querySelectorAll("input");
  const operator = document.querySelector("select").value;
  const result = calculate(
    Number(nums[0].value),
    Number(nums[1].value),
    operator
  );

  const resultString = `${nums[0].value} ${operator} ${nums[1].value} = ${result}`;

  if (!document.querySelector("#resultPara")) {
    createElement(
      "h1",
      resultString,
      document.querySelector("#result"),
      "resultPara"
    );
    return;
  }
  document.querySelector("#resultPara").innerText = resultString;
  document.getElementById("calc").reset();
});
