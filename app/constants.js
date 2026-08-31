export const baseURL = "https://https:jsonplaceholder.typicode.com";
export const { profile, phone, message, organization, repo } = { 
    profile: "racedocristian",
    phone: "1103034567",
    message: "Buenas tardes, quisiera hacer una consulta",
    organization: "digitalers-lx19",
    repo: "javascript",
}
export const navBarElements = [
    {
        tag: 'h1',
        className: 'navbar-brand | m-0 fs-5', 
        innerText: 'FakeGram'
    }, {
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
    }, {
        type: "button",
        class: "nav-link",
        url: "profile",
        text: "perfil",
    }, {
        type: "button",
        class: "nav-link",
        url: "albums",
        text: "albumes",
    },
]
export const socialMediaLinks = [
    {
        type: "link",
        class: "btn btn-outline-primary",
        text: "LinkedIn",
        url: `https://linkedin.com/in/${profile}`,
        target: "_blank"
    }, {
        type: "link",
        class: "btn btn-outline-dark",
        text: "GitHub",
        url: `https://github.com/${organization}/${repo}`,
        target: "_blank"
    }, {
        type: "link",
        class: "btn btn-outline-success",
        text: "Whatsapp",
        url: `https://api.whatsapp.com/send?phone=${phone}&text=${message}`,
        target: "_blank"
    },    
]