import "./menu.scss"; 

// Import all required images as object with require.context and mapping
function importAll(r) {
    let cache = {};
    r.keys().map((item, index) => {cache[item.replace('./', '')] = r(item);});
    return cache;
}

const images = importAll(require.context('./img/', false, /\.(png|jpe?g|svg)$/));



export default function createMenuDOM() {
    // Utility to create each menu item
    const _createMenuItem = (name, price, description, image) => {
        let menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        menuItem.innerHTML = `
            <div>
                <h3>${name}</h3>
                <div>${price}</div>
            </div>
            <div>
                <img src=${images[image]}>
                <div class=${name.toLowerCase()}></div>
                <p>${description}</p>
            </div>
        `;

        return menuItem;
    } ;


    const menuDom = document.createElement('div');
    menuDom.classList.add("menu");
    menuDom.innerHTML = `
        <h2>Menu</h2>
    `;

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuDom.appendChild(menuContainer);

    menuContainer.appendChild(_createMenuItem("Cod", "9$", "The tastiest", "cod.jpg"));
    menuContainer.appendChild(_createMenuItem("Haddock", "8$", "Something different", "haddock.jpg"));
    menuContainer.appendChild(_createMenuItem("Chips", "2$", "Classic", "chips.jpg"));

    return menuDom;
};