export class Comment {
    constructor({postId, id, name, email, body}){
        this.postId = postId
        this.id = id
        this.name = name
        this.email = email
        this.body = body
    }
    render(){ return `
        <article id="p${this.postId}c-${this.id}" class="d-flex align-items-start gap-2 my-3">
            <img class="border border-4 border-dark rounded-circle p-4 | bg-dark bg-gradient" src="" alt="">
            <div class="card">
            <address class="card-header">
                <div class="row | col col-sm-8 col-lg-9">
                    <a href="mailto:${this.email}">${this.email}</a>
                    <strong>${this.name}</strong>
                </div>
            </address>
            <div class="card-body">${this.body}</div>
            </div>
        </article>
    `}
}