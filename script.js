import * as fn from "./functions.js";

const openSelector = document.getElementById("typeSelector");
const closeSelector = document.getElementById("sidebarClose");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const sidebarUnderlay = document.getElementById("sidebarUnderlay");
const cards = document.getElementsByClassName("card");
const projectImages = document.getElementsByClassName("projectImg");
const projectNames = document.getElementsByClassName("name");
// const projectAges = document.getElementsByClassName("ageGroup");
const projectCourse = document.getElementsByClassName("bootcamp");
// const projectDate = document.getElementsByClassName("date");
const projectLink = document.getElementsByClassName("projectLink");

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

const handleData = (data) => {
  fn.makeCards(cards, data.length - 1);
  for (var [index, project] of data.entries()) {
    projectNames[index].innerHTML = `by ${project.data.student_name[0].text}`;
    // projectAges[index].innerHTMl = project.data.age_group;
    projectCourse[index].innerHTML = project.data.course[0].text;
    // projectDate[index].innerHTML = project.data.bootcamp_start_date;
    projectImages[index].src = project.data.site_image.url;
    projectLink[index].href = project.data.link_to_site.url;
    cards[index].classList.remove("hide");
  }
};

async function getData() {
  const masterRef = await fn.getApi();
  const data = await fn.getPosts(masterRef);
  handleData(data);
}

getData();
