function create(parent, titleText, optionsData) {
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

create(document.querySelector("nav"), "My Mega Menu", [
  {
    innerText: "Option 1",
    onclick: () => alert("Option 1 clicked!"),
  },
  {
    innerText: "Option 2",
    onclick: () => alert("Option 2 clicked... wowser!"),
  },
  {
    innerText: "Option 3",
    onclick: () => alert("Option 3 clicked, fuck my nugs!!"),
  },
]);

create(document.querySelector("nav"), "My Amazing Menu", [
  {
    innerText: "Vanilla",
    onclick: () => alert("The original!"),
  },
  {
    innerText: "Chocolate",
    onclick: () => alert("Another classic."),
  },
  {
    innerText: "Neopolitan",
    onclick: () => alert("Who even came up with this..."),
  },
]);
