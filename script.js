let burg = document.querySelector(".burger");
let X = document.querySelector(".x_mark");
let mob = document.querySelector(".header_nav");
// burgerclick
burg.addEventListener("click", () => {
  mob.style.left = "0px";
  X.style.display = "block";
  burg.style.display = "none";
});
// xclick
X.addEventListener("click", () => {
  mob.style.left = "-100%";
  X.style.display = "none";
  burg.style.display = "block";
});
