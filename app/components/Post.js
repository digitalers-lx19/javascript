export class Post {
    constructor({userId, id, title, body}){
        this.userId = userId;
        this.id = id;
        this.title = title,
        this.body = body
    }
    render(){ return `
        <article id="post-${this.id}" class="post-card card p-0">
            <header class="card-header">
                <h2>${this.title}</h2>
            </header>
            <div class="card-body">${this.body}</div>
            <footer class="card-footer">
                <section>
                    <h3>Comentarios</h3>
                    <div class="comments-box col-md-8 col-lg-6 | mx-auto">
                        <button class="btn">ver comentarios</button>
                    </div>
                </section>
            </footer>
        </article>
    `}
}