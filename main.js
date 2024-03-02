import { DOM, doCalculate, takeInput} from "./module.js";
import { showInput, clear, noneInput, activeAction, removeActive } from "./view.js";
// Darsan toog hadgalna
// Darsan toog delgets ruu damjuulna
// Uildel hiihed Delgets deerh toog hadgalna
// Delgetsiig tseverlene
// Dahin too darhad hadgalna
// toog delgets ruu damjuulna
// tentsuug darhad delgets deerh toog hadgalna
// uildliig guitsetgene
// delgetsend gargana.

let inputNumber, action, num1, num2, active, targetElement;

DOM.flex.addEventListener("click", function (e) {
  if (e.target.className === "num") {
    if (active === 0) {
      clear();
    }
    inputNumber = e.target.textContent;
    noneInput();
    showInput(inputNumber);
    active = 1;
  }
  if (e.target.className.startsWith("action")) {
    if (targetElement) removeActive(targetElement);
    targetElement = e.target;
    action = targetElement.textContent;
    activeAction(targetElement);
    num1 = takeInput();
    active = 0;
  } 
  if (e.target.className === "equal") {
    if (active) {
      num2 = takeInput();
      active = 0;
    } else {
      num1 = takeInput();
    }
    if (num2) {
      removeActive(targetElement);
      inputNumber = doCalculate(num1, num2, action);
      clear();
      noneInput();
      showInput(inputNumber);
    }
  }
  if (e.target.className === "clear") {
    clear();
    num1 = 0;
    num2 = 0;
    inputNumber = 0;
    if (targetElement) removeActive(targetElement);
  }
});
