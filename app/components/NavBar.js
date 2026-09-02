import { navigate } from "../utils.js";
import { LinkButton } from "./Button.js"

function NavBar({tag, links, childs}){
    this.links = links;
    this.tag = document.createElement(tag);
    this.childs = childs;
}
NavBar.prototype.addEvents = function () {
    this.tag.addEventListener('click', navigate)
}
NavBar.prototype.render = function ({container = root, classList, linksBox, ... props }) {
    Object.assign(this.tag, { classList, ...props })
    this.childs?.map(item => this.tag.append(item));
    const box = linksBox ? this.tag.querySelector(linksBox) : this.tag
    box.innerHTML += this.links.map(LinkButton).join("");
    this.addEvents();
    container.append(this.tag)
}
export default NavBar;