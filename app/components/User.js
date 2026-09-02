class User {
    constructor({id, name, username, email, address, phone, website,company}){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = new Address(address);
        this.phone = phone;
        this.website = website;
        this.company = new Company(company);
    }
    profile(){ return `
        <article id="user-${this.id}" class="card">
            <header class="card-header">
                <h2>${this.name} <strong>(${this.username})</strong></h2>
                <p>${this.email}</p>
            </header>
            <section class="card-body">
                ${this.address.render()}
                ${this.company.render()}
            </section>
            <footer class="card-footer">
                <button class="btn btn-secondary">volver</button>
            </footer>
        </article>
    `}
    render(){ return `
        <address class="list-group-item">
            <strong>${this.username}</strong>
            <em>(${this.name})</em>
            <a href="mailto:${this.email}">${this.email}</a>
            <button data-action="getUserData" data-params="${this.id}">ver perfil</button>
        </address>
    `}
}