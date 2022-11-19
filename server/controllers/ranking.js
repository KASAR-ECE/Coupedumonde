var connection = require("../db");

module.exports = {
  getAll: (callback) => {

    requete = "SELECT username, score from user ORDER BY score desc"
    connection.query(requete, function (err, result, fields) {
      if (err) {
        return callback(err, null);
      }
      if (result.length < 1) {
      
        return callback(
          new Error("No users yet"),
          null
         
        );
      } else {
       
        return callback(null, result);
      }
    });
  },
  
};



