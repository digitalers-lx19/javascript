function NavBar({tag, links, childs}){
    this.links = links;
    this.tag = document.createElement(tag);
    this.childs = childs;
}
NavBar.prototype.addEvents = function () {
    this.tag.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            e.preventDefault();
            history.pushState("", "", e.target.dataset.url);
        }
    })
}
NavBar.prototype.render = function ({container = root, classList, linksBox, ... props }) {
    const box = linksBox ?? this.tag
    Object.assign(this.tag, {
        classList,
        ...props
    })
    this.childs?.map(item => this.tag.append(item))
    this.links.forEach((link) => {
        if (link.type === "button") 
            box.innerHTML += `<button class="${link.class}" data-url="${link.url}">${link.text}</button>`
        if (link.type === "link")
            box.innerHTML += `<a class="${link.class}" href="${link.url}" ${link.target ? `target="${link.target}"`: ""}>${link.text}</a>`
    })
    this.addEvents();
    container.append(this.tag)
}
export default NavBar;