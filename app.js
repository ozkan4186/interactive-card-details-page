const name = document.querySelector("#name");

const one = document.querySelector(".one");

const second = document.querySelector(".second");

const buton = document.querySelector("#button");
const container = document.querySelector(".display-one");

buton.addEventListener("click", () => {
  one.style.display = "none";
  second.style.display = "flex";
});
