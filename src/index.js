import "./reset.scss";
import "./index.scss";

import home from "./home/home.js";
import menu from "./menu/menu.js";
import contact from "./contact/contact.js";


//Write frame here
//Then add event listeners to each button that removes all content of ".main" and replaces with return of each module

const frame = (() => {
    const frame = document.querySelector("#frame");

    const _createHeader = (parent) => {
        let header = document.createElement("header");

        // Create header tree with innerHTML, all hard-coded, no security risk
        header.innerHTML = `
        <h1>Chip hut by the sea</h1>
        <nav>
            <button id="home">Home</button>
            <button id="menu">Menu</button>
            <button id="contact">Contact</button>        
        </nav>
        `;

        parent.appendChild(header);
    };

    const _createBody = parent => {
        let body = document.createElement("div");
        body.classList.add("body");

        let contentDiv = document.createElement("div");
        contentDiv.id = "content";
        body.appendChild(contentDiv);

        parent.appendChild(body);
    };

    const _createFooter = parent => {
        let footer = document.createElement("footer");

        // Create footer tree with innerHTML, all hard-coded, no security risk
        footer.innerHTML = `
        <div class="flex-util">Legal Info</div>
        <div class="copyright">Copyright 2022</div>
        <a href="/legal">Legal Info</a>
        `;

        parent.appendChild(footer);
    };

    const createAllPageElements = () => {
        _createHeader(frame);
        _createBody(frame);
        _createFooter(frame);
    };

    return {
        createAllPageElements,
    }
})();

frame.createAllPageElements();
