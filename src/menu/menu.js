import './menu.scss'; 

export default function createMenuDOM() {
    const menuDom = document.createElement('div');
    menuDom.textContent = "MENU";

    return menuDom;
};