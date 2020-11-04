

export const aboutPage = {
    template:`
    <section class="about-us-container gcontainer">
        <h1>About Us</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quibusdam eos cum quam beatae corporis labore est repellat dignissimos. Modi inventore dolor corporis asperiores itaque veniam facilis eum necessitatibus deleniti.
        </p>
        <nav>
            <router-link to="/about/team">Our Team</router-link> |
            <router-link to="/about/services">Our Services</router-link> 
        </nav>
            <router-view></router-view>
    </section>
    `
}
export const aboutTeamPage = {
    template:`
    <section>
        <h1>About Our Team</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quibusdam eos cum quam beatae corporis labore est repellat dignissimos. Modi inventore dolor corporis asperiores itaque veniam facilis eum necessitatibus deleniti.
        </p>
    </section>
    `
}
export const aboutServicesPage = {
    template:`
    <section>
        <h1>Our Services</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quibusdam eos cum quam beatae corporis labore est repellat dignissimos. Modi inventore dolor corporis asperiores itaque veniam facilis eum necessitatibus deleniti.
        </p>
    </section>
    `
}