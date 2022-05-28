// import { head } from "lodash";
import { navBar } from "./components/header.js";
import { hello } from "./components/header.js";

const d = document,
    $header = d.querySelector('div#header'),
    $main = d.querySelector('div#main'),
    $footer = d.querySelector('div#footer');

function createHtmlElement(type, id, classesArray, content) {
  const element = d.createElement(type);
  if (id) element.id = id;
  if (classesArray){
    classesArray.forEach((sgclass) => element.classList.add(sgclass));
  }
  if (content) element.innerText = content;

  return element;
}

hello('Ryuk');
navBar();

export default createHtmlElement;