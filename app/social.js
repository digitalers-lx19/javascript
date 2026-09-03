import { socialMediaLinks } from "./constants/index.js";
import NavBar from "./components/NavBar.js";
export const social = new NavBar({
    tag: "div",
    links: socialMediaLinks
});
social.render({
    classList: "d-flex justify-content-center gap-2 p-2",
    container: root,
});