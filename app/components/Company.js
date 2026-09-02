export class Company{
    #name;
    #catchPhrase;
    #bs;
    constructor({name, catchPhrase, bs}){
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
    render(){ return `
        <address class="list-group">
            <strong class="list-group-item">${this.name}</strong>
            <em class="list-group-item">${this.catchPhrase}</em>
            <small class="list-group-item">${this.bs}</small>
        <address>    
    `}
}