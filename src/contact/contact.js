import "./contact.scss";

export default function createContactDOM() {
    const contactDom = document.createElement('div');
    contactDom.classList.add("contact");

    contactDom.innerHTML = `
        <h2>Contact</h2>
        <p>If you have any questions, feel free to contact us</p>
        <p>Phone: 555-5555</p>
        <p>Email: chiphut@thesea.com</p>
    `;

    return contactDom;
};