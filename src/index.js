import "./reset.scss";
import "./index.scss";

import init from "./init/init.js";
import home from "./home/home.js";
import menu from "./menu/menu.js";
import contact from "./contact/contact.js";


//DONE Write frame in init file here

// DONE Then add event listeners to each button that removes all content of "#content" and replaces with return of each module 

// Create each "page"

// Only menu left, need a couple cards, cod, sausage, chips


init.createAllPageElements();


const buttonHandler = (() => {
    let main = document.querySelector("#content");
    let _homeButton = document.querySelector("#home");
    let _menuButton = document.querySelector("#menu");
    let _contactButton = document.querySelector("#contact");

    const _replaceDOM = (section) => {
        main.innerHTML = ""; // Replace content with empty string to clear it
        main.appendChild(section());
    };

    // Initialize content with Home page
    _replaceDOM(home);

    const createAllButtonEventListeners = () => {
        _homeButton.addEventListener("click", () => {_replaceDOM(home)});
        _menuButton.addEventListener("click", () => {_replaceDOM(menu)});
        _contactButton.addEventListener("click", () => {_replaceDOM(contact)});
    };


    return {
        createAllButtonEventListeners,
    }
})();

buttonHandler.createAllButtonEventListeners();
