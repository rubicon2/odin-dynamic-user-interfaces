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
  let option = document.createElement("div");
  option.classList.add("dropdownOption");
  parent.appendChild(option);

  let link = document.createElement("a");
  link.innerText = optionData.innerText;
  option.appendChild(link);

  if (optionData.onclick != undefined) option.onclick = optionData.onclick;
  else if (optionData.href != undefined) link.href = optionData.href;

  return option;
}

function showMenuOptions(dropdownMenu) {
  let options = dropdownMenu.querySelectorAll(".dropdownOption");
  let priorHeight = 0;
  for (let i = 0; i < options.length; i++) {
    let currentOption = options[i];
    currentOption.style.zIndex = i * -1 - 1;
    currentOption.style.translate = `0 ${priorHeight}px`;
    priorHeight += currentOption.clientHeight;
  }
}

function hideMenuOptions(dropdownMenu) {
  let options = dropdownMenu.querySelectorAll(".dropdownOption");
  for (let i = 0; i < options.length; i++) {
    options[i].style.translate = `0 ${-100}%`;
  }
}
