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
            const response = await db.any(`SELECT * FROM parks;`);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async getParkReviews(p_id) {
        try {
            const response = await db.any(`SELECT * FROM reviews WHERE park_id = ${p_id}`);
            return response;
        } catch(err) {
            return err.message;
        }
    }
    
    static async getById(p_id) {
        try {
            const response = await db.one(`SELECT * FROM parks WHERE id = ${p_id}`);
            const parkInstance = new Park(response.id, response.name, response.address, response.picture);
            return parkInstance;
        } catch(err) {
            return err.message;
        }
    }
}

module.exports = Park;