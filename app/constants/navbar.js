export const navBarElements = [
    {
        tag: 'h1',
        className: 'navbar-brand | m-0 fs-5', 
        innerText: 'FakeGram'
    }, {
        tag: 'button',
        className: 'navbar-toggler navbar-toggler-icon',
        dataset: {
            bsTarget: "nav ul",
            bsToggle: "collapse",
        }
    }, {
        tag: 'ul',
        className: 'navbar-nav navbar-collapse collapse',
    }
]
export const navBarLinks = [
    {
        type: "button",
        class: "nav-link",
        url: "posts",
        text: "Inicio",
        action: "getPosts"
    }, {
        type: "button",
        class: "nav-link",
        url: "profile",
        text: "perfil",
        action: "getUserData",
        params: 1
    }, {
        type: "button",
        class: "nav-link",
        url: "albums",
        text: "albumes",
        action: "getUserAlbums",
        params: 1
    },
]