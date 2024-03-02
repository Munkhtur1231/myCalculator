import { DOM } from "./module.js";

export let showInput = (num) => {
    num = num.toString();
    if (num.length > 15) {
        num = num.substr(0, 14);
        console.log(num);
    } 
    DOM.input.textContent += num;
    
}
export let clear = () => {
    DOM.input.textContent = 0;
}
export let noneInput = () => {
    if (DOM.input.textContent === "0") {
        DOM.input.textContent = "";
      }
}
export let activeAction = (targetElement) => {
    targetElement.classList.add("active");
}
export let removeActive = (targetElement) => {
    targetElement.classList.remove("active");
}