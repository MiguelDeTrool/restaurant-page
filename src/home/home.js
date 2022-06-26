import './home.scss';

export default function createHomeDOM() {
    const homeDom = document.createElement('div');
    homeDom.classList.add("home");

    homeDom.innerHTML = `
        <h2>About Us</h2>
        <p>We put all our passion and our know-how into making you live a gourmet/gourmet experience in a rustic/modern setting and a friendly atmosphere.</p>
        <p>
        Nihil ipsum veniam rerum voluptatem excepturi illo. Non modi quis culpa dolorem in. In odit error beatae. Perspiciatis in qui molestiae.

        Sequi non et ipsam eos qui dolores non suscipit. Quas minus sit quasi. Ipsa necessitatibus et vel quasi consequuntur.

        Eum dolores eum aut. Libero similique odio ipsa alias molestias. Qui nobis quas sunt libero quod quae possimus.

        Enim sed quisquam exercitationem ad. Provident ex non blanditiis laboriosam et. Provident non odit voluptatem cumque.

        Fugiat quibusdam ea mollitia. Consectetur enim delectus eos. Incidunt illo possimus ex. Numquam harum sit ut amet delectus.
        </p>
        
    `;

    return homeDom;
};