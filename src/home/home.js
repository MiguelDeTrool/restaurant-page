import './home.scss';

export default function createHomeDOM() {
    const homeDom = document.createElement('div');
    homeDom.textContent = "home";

    return homeDom;
};