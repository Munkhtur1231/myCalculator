export const DOM = {
  input: document.querySelector(".input"),
  number: document.querySelector(".num"),
  flex: document.querySelector("#flex"),
  btnAction: document.querySelector(".action")
};
let numbers;
let result;

export let takeInput = () => {
    numbers = DOM.input.textContent;
    return numbers;
}

export let doCalculate = (num1, num2, action) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (action) {
    case '/' : 
      result = num1 / num2;
      break;
    case '*' :
      result = num1 * num2;
      break;
    case '+' :
      result = num1 + num2;
      break;
    case '-' :
      result = num1 - num2;
      break;
  }
  return result;
}