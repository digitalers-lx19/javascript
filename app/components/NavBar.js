function NavBar({tag, links, childs}){
    this.links = links;
    this.tag = document.createElement(tag);
}
NavBar.prototype.addEvents = function () {
    this.tag.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            e.preventDefault();
            history.pushState("", "", e.target.dataset.url);
        }
    })
}
NavBar.prototype.render = function ({container, classList, ... props }) {
    Object.assign(this.tag, {
        classList,
        ...props
    })
    this.links.forEach((link) => {
        if (link.type === "button") 
            this.tag.innerHTML += `<button class="${link.class}" data-url="${link.url}">${link.text}</button>`
        if (link.type === "link")
            this.tag.innerHTML += `<a class="${link.class}" href="${link.url}" ${link.target ? `target="${link.target}"`: ""}>${link.text}</a>`
    })
    this.addEvents();
    container.append(this.tag)
}
export default NavBar;