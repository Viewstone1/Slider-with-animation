const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button"); // переменные стрелок вверх и вниз
const sidebar = document.querySelector(".sidebar"); //переменная сайдбара
const container = document.querySelector(".container");
const mainSlide = document.querySelector(".main-slide"); //переменная блока мэйн слайд
const slidesCount = mainSlide.querySelectorAll("div").length; //переменная считает дивы, ленс переводит их в число

let activeSlideIndex = 0; //переменная которая следит какой слайд активный

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`; // высчитывает нужный бэкграунд колор

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    changeSlide("up");
  } else if (event.key === "ArrowDown") {
    changeSlide("down");
  }
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0; //если номер слайда равен slidesCount(максимальному числу), то будет рано 0
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`; //минус здесь влияет на направление движения слайда
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
