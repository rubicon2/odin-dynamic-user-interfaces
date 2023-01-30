export default function create(parent, titleText, optionsData) {
  let dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdownMenu");
  dropdownMenu.onmouseover = () => showMenuOptions(dropdownMenu);
  dropdownMenu.onmouseout = () => hideMenuOptions(dropdownMenu);
  parent.appendChild(dropdownMenu);

  let title = document.createElement("div");
  title.classList.add("dropdownMenuTitle");
  title.innerText = titleText;
  dropdownMenu.appendChild(title);

  let optionSet = document.createElement("div");
  optionSet.classList.add("dropdownOptionSet");
  dropdownMenu.appendChild(optionSet);

  optionsData.forEach((e) => {
    createOption(optionSet, e);
  });

  return dropdownMenu;
}

function createOption(parent, optionData) {
  let option = document.createElement("a");
  option.classList.add("dropdownOption");
  parent.appendChild(option);

  option.innerText = optionData.innerText;
  if (optionData.onclick != undefined) option.onclick = optionData.onclick;
  else if (optionData.href != undefined) option.href = optionData.href;

  return option;
}

function showMenuOptions(dropdownMenu) {
  let options = dropdownMenu.querySelectorAll(".dropdownOption");
  for (let i = 0; i < options.length; i++) {
    options[i].style.zIndex = i * -1 - 1;
    options[i].style.translate = `0 ${100 * i}%`;
  }
}

function hideMenuOptions(dropdownMenu) {
  let options = dropdownMenu.querySelectorAll(".dropdownOption");
  for (let i = 0; i < options.length; i++) {
    options[i].style.translate = `0 ${-100}%`;
  }
}