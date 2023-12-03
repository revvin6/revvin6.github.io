const wrapper = document.querySelector(".wrapper");

const question document.querySelector(".question");

const gif document.querySelector(".gif");

const yesBtn = document.querySelector(".yes-btn");

const noßtn document.querySelector(".no-btn");

yesBtn.addEventListener("click", () {

question. InnerHTML = "Aaaaa, I like you too"; gif.src =

"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"; });

noßtn.addEventListener("mouseover", () => {

const noßtnRect noßtn.getBoundingClientRect(); const maxX window.innerWidth noßtnRect.width;

const maxy = window.innerHeight noßtnRect.height;

const randomX = Math.floor(Math.random() maxx);

const randomY = Math.floor(Math.random() maxy);

noßtn.style.left = randomX + "px"; noBtn.style.top = randomy + "px"; });