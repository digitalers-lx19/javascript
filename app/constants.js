export const baseURL = "https://https:jsonplaceholder.typicode.com";
export const phone = "1103034567"
export const text = "Buenas tardes, quisiera hacer una consulta"
export const navBarLinks = [
    {
        type: "button",
        class: "nav-link",
        url: "posts",
        text: "Inicio",
    },  
    {
        type: "button",
        class: "nav-link",
        url: "profile",
        text: "perfil",
    },  
    {
        type: "button",
        class: "nav-link",
        url: "albums",
        text: "albumes",
    },
]
export const socialMediaLinks = [
    {
        type: "link",
        class: "nav-link",
        text: "LinkedIn",
        url: "https://linkedin.com",
        target: "_blank"
    },  
    {
        type: "link",
        class: "nav-link",
        text: "GitHub",
        url: "https://github.com/digitalers-lx19/javascript",
        target: "_blank"
    },  
    {
        type: "link",
        class: "nav-link",
        text: "Whatsapp",
        url: `https://api.whatsapp.com/send?phone=${phone}&text=${text}`,
        target: "_blank"
    },    
]