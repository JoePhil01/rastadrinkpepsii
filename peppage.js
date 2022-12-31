const body = document.querySelector("body");
const change = document.querySelector(".change");
const change2 = document.querySelector(".change2");
const change3 = document.querySelector(".change3");
const img1 = document.querySelector(".imgone");
const img2 = document.querySelector(".imgtwo");
const img3 = document.querySelector(".imgthree");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const mob = document.querySelector(".headtwo");

const changeOne = () => {
  body.classList.add("body", "btn");
  body.classList.remove("one");
  body.classList.remove("two");
  img1.classList.remove("none");
  img1.classList.add("block");
  img2.classList.remove("block");
  img3.classList.remove("block");
  change.classList.add("move");
  change2.classList.remove("move");
  change3.classList.remove("move");
};

const changeTwo = () => {
  body.classList.add("one", "btn");
  body.classList.remove("body");
  body.classList.remove("two");
  img2.classList.add("block");
  img1.classList.add("none");
  img3.classList.remove("block");
  change.classList.remove("move");
  change2.classList.add("move");
  change3.classList.remove("move");
  if (img1.classList.contains("block")) {
    img1.classList.remove("block");
  }
};

const changeThree = () => {
  body.classList.add("two");
  body.classList.remove("one");
  body.classList.remove("body");
  img3.classList.add("block");
  img2.classList.remove("block");
  img1.classList.add("none");
  change.classList.remove("move");
  change2.classList.remove("move");
  change3.classList.add("move");
  if (img1.classList.contains("block")) {
    img1.classList.remove("block");
  }
};
change.addEventListener("click", changeOne);
change2.addEventListener("click", changeTwo);
change3.addEventListener("click", changeThree);

const open = () => {
  mob.classList.add("right");
};
const closee = () => {
  mob.classList.remove("right");
};
menu.addEventListener("click", open);
close.addEventListener("click", closee);
