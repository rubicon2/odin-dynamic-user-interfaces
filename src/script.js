import './style.css';
import homeIcon from './home.svg';
import searchIcon from './search.svg';
import optionsIcon from './options.svg';
import { default as createDropdownMenu } from './modules/dropdownMenu';
import { default as createMobileMenu } from './modules/mobileMenu/mobileMenuScript';

const body = document.querySelector('body');

createMobileMenu(body, [
  {
    name: 'Home',
    icon: homeIcon,
    onclick: () => createHomeMenu(body),
    default: true,
  },
  {
    name: 'Search',
    icon: searchIcon,
    onclick: () => createSearchMenu(body),
  },
  {
    name: 'Settings',
    icon: optionsIcon,
    onclick: () => createOptionsMenu(body),
  },
]);

function createHomeMenu(parent) {
  document.querySelector('nav')?.remove();

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

function createSearchMenu(parent) {
  document.querySelector('nav')?.remove();

  let nav = document.createElement('nav');
  parent.appendChild(nav);

  createDropdownMenu(nav, 'Search Menu 1', [
    {
      innerText: 'Google a different menu',
      href: 'https://www.google.com',
    },
    {
      innerText: 'Option 2',
      onclick: () => alert('Option 2 clicked... wowser!'),
    },
  ]);

  createDropdownMenu(nav, 'Search Menu 2', [
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
  document.querySelector('nav')?.remove();

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
