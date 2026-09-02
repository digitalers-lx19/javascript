export class Address{
    constructor({street, suite, city, zipcode}){
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
    }
    renderList(){
        return Object.entries(this).map(([entry, value]) => 
        `<li class="list-group-item">
            <strong class="badge bg-dark | me-2 fs-6">${entry}: </strong> ${value}
        </li>`).join("");
    }    
    render(){ return `
        <ul class="list-group list-group-flush">
            ${this.renderList()}
        </ul>    
    `}
}