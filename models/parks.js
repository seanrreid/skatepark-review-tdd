const db = require('./conn.js');

class Parks {
    constructor(id, name, address, street, city, state, picture){
        this.id = id;
        this.name = name;
        this.address = address;
        this.street = street;
        this.city = city;
        this.state = state;
        this.picture = picture;
    }

    static async getAll() {
        try {
            const response = await db.any(`select * from parks;`);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async getParkReviews(p_id) {
        try {
            const response = await db.any(`select * from reviews where park_id = ${p_id}`);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async getById(p_id) {
        try {
            const response = await db.one(`select * from parks where id = ${p_id}`);

            return new Parks (response.id, response.name, response.address, response.street, response.city, response.state, response.picture);
        } catch(err) {
            return err.message;
        }
    }
}

module.exports = Parks;