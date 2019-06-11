const pgp = require('pg-promise') ({
    query: e => {
        console.log('QUERY:', e.query);
    }
})

const options = {
    host: 'localhost',
    database: 'skateparks',
    user: 'liza'
}

const db = pgp(options);

module.exports = db;