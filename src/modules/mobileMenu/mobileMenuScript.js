import './style.css';
import homeIcon from './home.svg';
import searchIcon from './search.svg';
import optionsIcon from './options.svg';

export default function create(parent) {
  let background = document.createElement('div');
  background.classList.add('mobileMenu');
  parent.appendChild(background);

  let iconContainer = document.createElement('div');
  iconContainer.classList.add('iconContainer');
  background.appendChild(iconContainer);

  createMenuOption(iconContainer, homeIcon, null);
  createMenuOption(iconContainer, searchIcon, null);
  let spinningCog = createMenuOption(iconContainer, optionsIcon, null);
  spinningCog.classList.add('spinningCog');
}

function createMenuOption(parent, icon, fn) {
  let mobileMenuIcon = document.createElement('img');
  mobileMenuIcon.classList.add('menuIcon');
  mobileMenuIcon.src = icon;
  mobileMenuIcon.onclick = fn;
  parent.appendChild(mobileMenuIcon);

  return mobileMenuIcon;
}
