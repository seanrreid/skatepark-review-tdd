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

    static async getById(id) {
        try {
            const response = await db.one(
                `SELECT
                    name, address, picture
                FROM 
                    parks
                WHERE
                    id = ${id}`
            );
            const park = new Park(
                id,
                response.name, 
                response.address, 
                response.picture);
            console.log("park:", park);
            return park;
        } catch (e) {
            return e.message;
        }
    }
}

module.exports = Park;