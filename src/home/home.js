import './home.scss';

export default function component() {
    const element = document.createElement('div');

    element.textContent = "home";

    element.classList.add('hello');

    return element;
};