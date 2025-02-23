import Toggler from "./css-class-toggler.js";

const navToggler = document.querySelector(".js-dropdown-toggler");
const navItems = document.querySelector(".js-dropdown-items");

const mainMenuDropdown = new Toggler(navToggler, navItems, "hidden");

const hideLinkListToggler = document.querySelector(".js-hide-link-list")
const linkListItems = document.querySelector(".js-link-list");

const linkListDropdown = new Toggler(hideLinkListToggler, linkListItems, "border");
