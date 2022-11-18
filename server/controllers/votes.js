var connection = require("../db");
const { parseCookies } = require("../middleware/parseCookies");

module.exports = {
  getAll: (callback) => {
    return callback(
      new Error("No votes available, fill the database first!"),
      null
    );
  },
  getAllVotesUser: (idUser, callback) => {
    var sql = "SELECT * FROM predict WHERE username = ?";
    connection.query(sql, [idUser], function (err, result, fields) {
      if (err) {
        return callback(err, null);
      }
      if (result.length < 1) {
        return callback(
          new Error("No votes found for this user, try another one."),
          null
        );
      } else {
        return callback(null, result);
      }
    });
  },
  getOneVotesUser: (idUser, idGame, callback) => {
    var sql = "SELECT * FROM predict WHERE username =  ? and game_ID = ?";
    connection.query(sql, [idUser, idGame], function (err, result, fields) {
      if (err) {
        return callback(err, null);
      }
      if (result.length < 1) {
        return callback(
          new Error(
            "No votes found for this user or this game, try another one."
          ),
          null
        );
      } else {
        return callback(null, result);
      }
    });
  },
  createVote: (req, callback) => {
    var user;
    voteData = req.body;
    const token = parseCookies(req);

    if (isEmpty(token)) {
      let err = {
        message: "You are not logged in",
      };
      return callback(err, null);
    } else {
      user = parseJwt(token.token);
      user = user.username;
    }

    if (
      !voteData.username ||
      !voteData.game_ID ||
      voteData.score_home === null ||
      voteData.score_home === "" ||
      voteData.score_away === null ||
      voteData.score_away === ""
    )
      return callback(
        new Error(
          "Wrong vote parameters : " +
            voteData.username +
            "||" +
            voteData.game_ID +
            "||" +
            voteData.score_home +
            "||" +
            voteData.score_away
        ),
        null
      );

    const voteObj = {
      username: user,
      game_ID: voteData.game_ID,
      score_home: voteData.score_home,
      score_away: voteData.score_away,
    };

    var sqlCheck = "SELECT * from predict where username = ? and game_ID = ?";
    connection.query(
      sqlCheck,
      [voteObj.username, voteObj.game_ID],
      function (err, result) {
        if (err) {
          return callback(err, null);
        } else {
          if (result.length > 0) {
            //this user already voted for this game, so its an update
            var sql =
              "UPDATE predict SET `score_home` = ?, `score_away` = ? WHERE username = ? and game_ID = ?";
            connection.query(
              sql,
              [
                voteObj.score_home,
                voteObj.score_away,
                voteObj.username,
                voteObj.game_ID,
              ],
              function (err, result) {
                if (err) {
                  return callback(err, null);
                } else {
                  return callback(null, result);
                }
              }
            );
          } else {
            //we intert the new vote for this user
            var sql =
              "INSERT INTO predict (`username`,`game_ID`,`score_home`,`score_away`) VALUES (?, ?, ?, ?)";
            var values = Object.values(voteObj);
            connection.query(sql, values, function (err, result) {
              if (err) {
                return callback(err, null);
              } else {
                return callback(null, result);
              }
            });
          }
        }
      }
    );

    // curl --header "Content-Type: application/json" \
    // --request POST \
    // --data '{"predict_ID":"3","username":"userTest","game_ID":"3", "score_home":"1", "score_away":"1"}' \
    // http://localhost:3000/votes
  },
};

function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}

function isEmpty(object) {
  return Object.keys(object).length === 0;
}
