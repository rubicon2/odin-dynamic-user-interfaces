import "./style.css";
import { default as createDropdownMenu } from "./modules/dropdownMenu";

createNav(document.querySelector("body"));

function createNav(parent) {
  let nav = document.createElement("nav");
  parent.appendChild(nav);

  createDropdownMenu(nav, "My Mega Menu", [
    {
      innerText: "Google a different menu",
      href: "https://www.google.com",
    },
    {
      innerText: "Option 2",
      onclick: () => alert("Option 2 clicked... wowser!"),
    },
    {
      innerText: "Option 3",
      onclick: () => alert("Option 3 clicked, DO NOTHING STRANGE to my nugs!!"),
    },
  ]);

  createDropdownMenu(nav, "My Amazing Menu", [
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

  createDropdownMenu(nav, "My Third Menu", [
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

  return nav;
}
