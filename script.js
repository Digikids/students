import * as fn from "./functions.js";

const openSelector = document.getElementById("typeSelector");

openSelector.onclick = () => {
  fn.openSelector("hello");
};
