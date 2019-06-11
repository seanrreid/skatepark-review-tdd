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

    static async getById(user_id){
        try{
            const response = await db.one(`
                SELECT id, name, address, street, city, state, picture
                FROM parks
                WHERE id = $1`, [user_id]);

            return new Park(response.id, response.name, response.address, response.picture);
        } catch(err) {
            return(err.message);
        }
    }
}

module.exports = Park;