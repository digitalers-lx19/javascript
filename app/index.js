import NavBar from "./components/NavBar.js";
import { navBarLinks, socialMediaLinks } from "./constants.js";
(() => document.addEventListener('DOMContentLoaded', () => {
    const navbar = new NavBar({
        tag: "nav",
        links: navBarLinks
    })
    navbar.render({
        classList: "navbar navbar-dark navbar-expand-lg bg-dark",
        container: root,
    })
    const social = new NavBar({
        tag: "div",
        links: socialMediaLinks
    })
    social.render({
        classList: "d-flex justify-content-center",
        container: root,
    })
}))()