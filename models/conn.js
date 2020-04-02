const pgp = require('pg-promise')({
    query: function(e) {
        console.log('QUERY: ', e.query);
    }
});

const options = {
    host: 'drona.db.elephantsql.com ',
    database: 'trusuiio',
    user: 'trusuiio',
    password: 'GQzdHZpS4TBPehS8rzk2KzXDA5hzFs9K'
};

const db = pgp(options);

module.exports = db;