// get element with id of currentYear
const currentYearElement = document.getElementById("currentYear");
// get current year
const currentYear = new Date().getFullYear();
// set current year to currentYearElement
currentYearElement.textContent = currentYear;

// Toggle menu
document.querySelector(".menu-open-btn").addEventListener("click", function () {
  document.querySelector(".menu-open-btn").style.display = "none";
  document.querySelector(".menu-close-btn").style.display = "block";
  document.querySelector("nav").style.display = "block";
});

document
  .querySelector(".menu-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".menu-open-btn").style.display = "block";
    document.querySelector(".menu-close-btn").style.display = "none";
    document.querySelector("nav").style.display = "none";
  });
