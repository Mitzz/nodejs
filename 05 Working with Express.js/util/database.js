const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node',
    password: 'Diebold@123',
    port:3310
});

module.exports = pool.promise();