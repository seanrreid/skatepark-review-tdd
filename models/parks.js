const db = require('./conn.js');

class Park {
    constructor(id, name, address, picture){
        this.id = id;
        this.name = name;
        this.address = address;
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
            const {id, name, address, picture} = await db.one(`select id, name, address, picture from parks where id = ${p_id}`);
            const park = new Park(id, name, address, picture);
            console.log(park);
            return park;
        } catch(err) {
            return err.message;
        }
    }
}

module.exports = Park;