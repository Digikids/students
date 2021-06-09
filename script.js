import * as fn from "./functions.js";

const openSelector = document.getElementById("typeSelector");
const closeSelector = document.getElementById("sidebarClose");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

var hideElementToRight = "-100%";

openSelector.onclick = () => {
  fn.openSelector(sidebar, closeBtn, "0", "20px");
};

closeSelector.onclick = () => {
  fn.openSelector(sidebar, closeBtn, hideElementToRight, hideElementToRight);
};
