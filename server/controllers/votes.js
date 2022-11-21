var connection = require("../db");
const { parseCookies } = require("../middleware/parseCookies");
const jwt = require("jsonwebtoken")

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
    var respObj;


    const cookie = parseCookies(req);
    if(isEmpty(cookie)){
      respObj = {
        error: true,
        msg: "You are not logged in",
      };
      return callback(respObj, null);

    }
    
    var token
    try {
  
      token = jwt.verify(cookie.token, process.env.JWT_SECRET)
    } catch (e) {
      if (e instanceof jwt.JsonWebTokenError) {
        respObj = {
          error: true,
          msg: "Wrong token",
        };
  
        return callback(respObj, null);
      }
  
      return resp.status(400).end()
    }
    if(isEmpty(token)){
      respObj = {
        status: "error",
        msg: "You are not logged in",
      };
      return callback(respObj, null);

    }
  

    if(typeof(token.username) === "undefined"){
      respObj = {
        status: "error",
        msg: "You are not logged in",
      };
      return callback(respObj, null);

    }
    user = token.username

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

    var sqlCheck = "SELECT date from games where match_id = ?";
    connection.query(sqlCheck, [voteObj.game_ID], function (err, result) {
      if (err) {
        return callback(err, null);
      } else {
        const utcStr = new Date();
        if (utcStr < result[0].date) {
          var sqlCheck =
            "SELECT * from predict where username = ? and game_ID = ?";
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
        } else {
          let err = {
            message: "Can't vote for this match",
          };
          return callback(err, null);
        }
      }
    });

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
