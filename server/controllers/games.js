var connection = require("../db");

module.exports = {
  getAll: (callback) => {

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var hh = today.getHours();
var min = today.getMinutes();
var s = today.getSeconds();
today = "'"+yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min +':' + s+'.'+'000000'+"'";
requete = "SELECT * FROM games WHERE date > " + today;
console.log(today);
    connection.query(requete, function (err, result, fields) {
      if (err) {
        return callback(err, null);
      }
      if (result.length < 1) {
        return callback(
          new Error("No games available, fill the database first!"),
          null
        );
      } else {
        return callback(null, result);
      }
    });
  },
  getOneGame: (id, callback) => {
    var sql = "SELECT * FROM games WHERE games.match_id = ?";
    connection.query(sql, [id], function (err, result, fields) {
      if (err) {
        return callback(err, null);
      }
      if (result.length < 1) {
        return callback(new Error("No game found, try another one."), null);
      } else {
        return callback(null, result);
      }
    });
  },
};
