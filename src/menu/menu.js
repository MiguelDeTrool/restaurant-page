import './menu.scss'; 

export default function component() {
    const element = document.createElement('div');

    element.textContent = "menu";

    element.classList.add('hello');

    return element;
};