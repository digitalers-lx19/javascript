export const LinkButton = (link) => 
    link.type === "button" ? 
        `<button class="${link.class}" 
            data-url="${link.url}" 
            ${link.action ? `data-action="${link.action}"` : ''} 
            ${link.params ? `data-params="${link.params}"` : ''}>
                ${link.text}
        </button>` : 
    link.type === "link" ? 
        `<a class="${link.class}" 
            href="${link.url}" 
            ${link.target ? `target="${link.target}"`: ""}>
            ${link.text}
        </a>` : 
        ''