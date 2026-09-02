import { Router } from "./router.js";

export const create = ({tag = "div", dataset = {}, ...props}) => {
    const element = document.createElement(tag);
    Object.assign(element, props);
    Object.entries(dataset)?.map(([k, v]) => element.dataset[k] = v);
    return element
}
export const container = document.getElementById('main') ?? create({
    tag: "main",
    id: "main",
    className: "container row mx-auto gap-3 p-3"
})
export const getData = async(url) => {
    const request = await fetch(url);
    const data = await request.json();
    return data;
}
export const navigate =  (e) => {
    if (e.target.tagName === "BUTTON") {
        e.preventDefault();
        const { dataset } = e.target;
        const { action, params, url } = dataset;
        if (action && params) Router[action](params)
        history.pushState("", "", url);
} }