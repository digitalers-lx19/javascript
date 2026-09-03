import { profile, organization, repo, phone, message } from "./index.js"
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