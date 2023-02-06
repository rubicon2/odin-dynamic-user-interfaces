import './style.css';
import arrowNext from './arrow_next.svg';

let images = [];
let currentImg = 0;

export default function create(parent, data) {
  let carousel = document.createElement('div');
  carousel.classList.add('imageCarousel');
  parent.appendChild(carousel);

  data.forEach((e) => {
    images.push(createImageForCarousel(carousel, e));
  });

  images[currentImg].classList.remove('hidden');

  createControls(carousel, images);

  setInterval(function () {
    displayNextImg(carousel);
  }, 5000);

  return carousel;
}

function createControls(parent, images) {
  // Not using "arrowBack" as it is not centered within the source file
  // Instead using arrowNext and scaling x by -1
  let previousImg = document.createElement('div');
  previousImg.classList.add('control', 'previousImg');
  parent.appendChild(previousImg);

  previousImg.addEventListener('click', () => {
    displayPreviousImg(parent);
  });

  let previousArrow = document.createElement('img');
  previousArrow.src = arrowNext;
  previousImg.appendChild(previousArrow);

  let nextImg = document.createElement('div');
  nextImg.classList.add('control', 'nextImg');
  parent.appendChild(nextImg);

  nextImg.addEventListener('click', () => {
    displayNextImg(parent);
  });

  let nextArrow = document.createElement('img');
  nextArrow.src = arrowNext;
  nextImg.appendChild(nextArrow);

  createImgSelector(parent, images);
}

function createImgSelector(parent, images) {
  let imgSelector = document.createElement('div');
  imgSelector.classList.add('imgSelector');
  parent.appendChild(imgSelector);

  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    let selectorDot = document.createElement('div');
    selectorDot.classList.add('selectorDot');
    imgSelector.appendChild(selectorDot);

    selectorDot.addEventListener('click', () => {
      currentImg = i;
      resetSelectorDots(parent);
      selectorDot.classList.add('selected');
      hideImages(parent);
      image.classList.remove('hidden');
    });
  }

  setSelectorDot(parent);
}

function createImageForCarousel(parent, data) {
  // Hidden by default
  let container = document.createElement('div');
  container.classList.add('imgContainer', 'hidden');
  parent.appendChild(container);

  let img = document.createElement('img');
  img.classList.add('carouselImage');
  img.src = data.src;
  img.alt = data.alt;
  container.appendChild(img);

  return container;
}

function setSelectorDot(parent) {
  resetSelectorDots(parent);
  let allDots = parent.querySelectorAll('.selectorDot');
  allDots[currentImg].classList.add('selected');
}

function resetSelectorDots(parent) {
  parent.querySelector('.selectorDot.selected')?.classList.remove('selected');
}

function hideImages(parent) {
  parent
    .querySelectorAll('.imgContainer')
    .forEach((e) => e.classList.add('hidden'));
}

function displayPreviousImg(parent) {
  hideImages(parent);
  currentImg = currentImg - 1 < 0 ? images.length - 1 : --currentImg;
  images[currentImg].classList.remove('hidden');
  setSelectorDot(parent);
}

function displayNextImg(parent) {
  hideImages(parent);
  currentImg = currentImg + 1 >= images.length ? 0 : ++currentImg;
  images[currentImg].classList.remove('hidden');
  setSelectorDot(parent);
}
