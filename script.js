const bars = document.getElementById("bar");
const barsNoDisplay = document.querySelector(".fa-solid");
const navLinks = document.querySelector(".nav-links");
const dateupDate = document.getElementById("date");
const cancle = document.getElementById("cancle");
let show = true;

const getDate = new Date().getFullYear();
console.log(getDate);
dateupDate.textContent = getDate;

console.log(bars);

bars.addEventListener("click", () => {
  navLinks.classList.toggle("nav-link-show");
  if (show) {
    show = false;
    cancle.style.display = "block";
    barsNoDisplay.style.display = "none";
  } else {
    show = true;
    cancle.style.display = "none";
    barsNoDisplay.style.display = "block";
  }
});
