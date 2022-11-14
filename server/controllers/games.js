var connection = require('../db')


module.exports = {
    getAll: (callback) => {
        connection.query("SELECT * FROM games", function (err, result, fields) {
            if (err) {
                return callback(err, null)
            }
            if (result.length < 1) {
                return callback(new Error("No games available, fill the database first!"), null)
            }
            else {
                return callback(null, result);
            }
        });
    },
    getOneGame: (id, callback) => {
        var sql = 'SELECT * FROM games WHERE games.match_id = ?';
        connection.query(sql, [id], function (err, result, fields) {
            if (err) {
                return callback(err, null)
            }
            if (result.length < 1) {
                return callback(new Error("No game found, try another one."), null)
            }
            else {
                return callback(null, result);
            }
        });
    },
}
