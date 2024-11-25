import _ from "lodash";
import { cube } from "./math.js";
import "./style.css";

function component() {
  const el = document.createElement("div");

  const text = `5的立方是${cube(5)}`;
  el.innerHTML = _.join(["hellasasas", "webpack", text]);
  el.classList.add("text");
  return el;
}

document.body.appendChild(component());
