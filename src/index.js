import _ from "lodash";
import "./style.css";

function component() {
  const el = document.createElement("div");
  el.innerHTML = _.join(["hellasasas", "webpack", " "]);
  el.classList.add("text");
  return el;
}

document.body.appendChild(component());
