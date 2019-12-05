


class Author {
    constructor(authorData) {
        this.id = authorData.id;
        this.name = authorData.name;
        this.username = authorData.username;
        // this.street = authorData.address.street;
        // this.city = authorData.address.city;
        // this.zipcode = authorData.address.zipcode;
        this.email = authorData.email;
        this.phone = authorData.phone;
    }
}
export default Author;