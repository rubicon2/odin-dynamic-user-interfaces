import './style.css';

export default function create(parent, menuOptions) {
  let menu = document.createElement('div');
  menu.classList.add('mobileMenu');
  parent.appendChild(menu);

  menuOptions.forEach((menuOption) => {
    let optionElement = createMenuOption(
      menu,
      menuOption.name,
      menuOption.icon,
      menuOption.onclick
    );
    if (menuOption.default) optionElement.click();
  });

  return menu;
}

function createMenuOption(parent, name, icon, onClick) {
  let menuTab = document.createElement('div');
  menuTab.classList.add('menuTab');
  parent.appendChild(menuTab);

  menuTab.addEventListener('click', () => {
    parent
      .querySelectorAll('.menuTabSelected')
      .forEach((e) => e.classList.remove('menuTabSelected'));
    menuTab.classList.add('menuTabSelected');
    if (onClick != null) onClick();
  });

  let mobileMenuIcon = document.createElement('img');
  mobileMenuIcon.classList.add('menuIcon');
  mobileMenuIcon.src = icon;
  mobileMenuIcon.alt = name;
  menuTab.appendChild(mobileMenuIcon);

  return menuTab;
}
