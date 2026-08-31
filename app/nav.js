import { navBarLinks } from "./constants.js";
import NavBar from "./components/NavBar.js";
const create = (tag, {dataset = {}, ...props}) => {
    const element = document.createElement(tag)
    Object.assign(element, props)
    Object.entries(dataset).forEach(([k, v]) => {
        if (element) element.dataset[k] = v;
    });
    return element
}
export const navbar = new NavBar({
    tag: "nav",
    links: navBarLinks,
    childs: [[
        create('h1', { className: 'navbar-brand | m-0 fs-5', innerText: 'FakeGram'}),
        create('button', {
            className: 'navbar-toggler navbar-toggler-icon',
            dataset: {
                bsTarget: "nav ul",
                bsToggle: "collapse",
            }
        }),
        create('ul', { className: 'navbar-nav navbar-collapse collapse' })
    ]]
})
navbar.render({
    classList: "navbar navbar-dark navbar-expand-lg bg-dark py-1 px-2",
    container: root,
    linksBox: navbar.childs.find(item => item.tagName == 'UL')
});