import './style.css';
import homeIcon from './home.svg';
import searchIcon from './search.svg';
import optionsIcon from './options.svg';
import { default as createDropdownMenu } from './modules/dropdownMenu';
import { default as createMobileMenu } from './modules/mobileMenu/mobileMenuScript';
import { default as createImageCarousel } from './modules/imageCarousel/imageCarouselScript';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

const body = document.querySelector('body');

createMobileMenu(body, [
  {
    name: 'Home',
    icon: homeIcon,
    onclick: () => {
      clearPage(body);
      createHomeMenu(body);
    },
    default: true,
  },
  {
    name: 'Search',
    icon: searchIcon,
    onclick: () => {
      clearPage(body);
      body.querySelector('.mobileMenu')?.remove();
      createMegaCarousel(body);
    },
  },
  {
    name: 'Settings',
    icon: optionsIcon,
    onclick: () => {
      clearPage(body);
      createOptionsMenu(body);
    },
  },
]);

function clearPage(parent) {
  parent.querySelector('.imageCarousel')?.remove();
  parent.querySelector('nav')?.remove();
}

function createMegaCarousel(parent) {
  parent.querySelector('.imageCarousel')?.remove();

  createImageCarousel(parent, [
    {
      src: img1,
      alt: 'An amazing icon!',
    },
    {
      src: img2,
      alt: 'Another incredible icon!',
    },
    {
      src: img3,
      alt: 'Another incredible icon!',
    },
    {
      src: img4,
      alt: 'Another incredible icon!',
    },
  ]);
}

function createHomeMenu(parent) {
  parent.querySelector('nav')?.remove();

  let nav = document.createElement('nav');
  parent.appendChild(nav);

  createDropdownMenu(nav, 'Home Menu 1', [
    {
      innerText: 'Google a different menu',
      href: 'https://www.google.com',
    },
    {
      innerText: 'Option 2',
      onclick: () => alert('Option 2 clicked... wowser!'),
    },
  ]);

  createDropdownMenu(nav, 'Home Menu 2', [
    {
      innerText: 'Google a different menu',
      href: 'https://www.google.com',
    },
    {
      innerText: 'Option 2',
      onclick: () => alert('Option 2 clicked... wowser!'),
    },
  ]);

  return nav;
}

function createOptionsMenu(parent) {
  parent.querySelector('nav')?.remove();

  let nav = document.createElement('nav');
  parent.appendChild(nav);

  createDropdownMenu(nav, 'My Mega Menu', [
    {
      innerText: 'Google a different menu',
      href: 'https://www.google.com',
    },
    {
      innerText: 'Option 2',
      onclick: () => alert('Option 2 clicked... wowser!'),
    },
    {
      innerText: 'Option 3',
      onclick: () => alert('Option 3 clicked, DO NOTHING STRANGE to my nugs!!'),
    },
  ]);

  createDropdownMenu(nav, 'My Amazing Menu', [
    {
      innerText: 'Vanilla',
      onclick: () => alert('The original!'),
    },
    {
      innerText: 'Chocolate',
      onclick: () => alert('Another classic.'),
    },
    {
      innerText: 'Neopolitan',
      onclick: () => alert('Who even came up with this...'),
    },
  ]);

  createDropdownMenu(nav, 'My Third Menu', [
    {
      innerText: 'Vanilla',
      onclick: () => alert('The original!'),
    },
    {
      innerText: 'Chocolate',
      onclick: () => alert('Another classic.'),
    },
    {
      innerText: 'Neopolitan',
      onclick: () => alert('Who even came up with this...'),
    },
  ]);

  createDropdownMenu(nav, 'My Fourth Menu', [
    {
      innerText: 'Vanilla',
      onclick: () => alert('The original!'),
    },
    {
      innerText: 'Chocolate',
      onclick: () => alert('Another classic.'),
    },
    {
      innerText: 'Neopolitan',
      onclick: () => alert('Who even came up with this...'),
    },
  ]);

  return nav;
}
