const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");

const imageSliderEl = document.querySelector(".image-slider");

let currentImage = 1;

nextEl.addEventListener("click", () => {
  currentImage++;
  imgUpdate();
})


function imgUpdate(){
  imageSliderEl.style.transform = `translateX(-${currentImage * 500}px)`;
}