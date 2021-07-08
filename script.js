import * as fn from "./functions.js";

const openSelector = document.getElementById("typeSelector");
const closeSelector = document.getElementById("sidebarClose");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const sidebarUnderlay = document.getElementById("sidebarUnderlay");

var hideElementToRight = "-100%";

const handleClose = () => {
  fn.openSelector(sidebar, closeBtn, hideElementToRight, hideElementToRight);
  sidebarUnderlay.style.display = "none";
};

sidebarUnderlay.onclick = () => {
  handleClose();
};

closeSelector.onclick = () => {
  handleClose();
};

openSelector.onclick = () => {
  fn.openSelector(sidebar, closeBtn, "0", "20px");
  sidebarUnderlay.style.display = "block";
};
