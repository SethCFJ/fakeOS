import createElement from "./dom-utils.js";

const form = document.querySelector("#calc");
const closeBtn = document.getElementById("closeCalculator");
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Invalid Numbers";
      }
      return num1 / num2;
  }
};
let resultString = "";
export default calculate;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nums = document.querySelectorAll("input");
  const operator = document.querySelector("select").value;
  const result = calculate(
    Number(nums[0].value),
    Number(nums[1].value),
    operator
  );

  resultString = `${nums[0].value} ${operator} ${nums[1].value} = ${result}`;

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
  form.reset();
});

closeBtn.addEventListener("click", () => {
  resultString = "";
});
