import { navBarElements, navBarLinks } from "./constants/index.js";
import { create } from "./utils.js";
import NavBar from "./components/NavBar.js";
export const navbar = new NavBar({
    tag: "nav",
    links: navBarLinks,
    childs: navBarElements.map(n => create(n))
})
navbar.render({
    classList: "navbar navbar-dark navbar-expand-lg bg-dark py-1 px-2",
    container: root,
    linksBox: 'ul'
});