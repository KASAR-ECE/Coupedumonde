var express = require("express"),
  router = express.Router();
const jwt = require("jsonwebtoken");
require("crypto").randomBytes(64).toString("hex");
const bcrypt = require("bcrypt");
const fs = require("fs");

var connection = require("../db");

const auth = require("../middleware/auth");

router.post("/addmatch", async (req, res) => {
  var mailstate = false;
  var usernamestate = false;
  if (req.body.dataAway_team) dataAway_team = req.body.dataAway_team;
  else {
    console.log("ERROR : no dataAway_team returned");
    data = {
      error: true,
      message: "no dataAway_team",
    };
    res.status(403).json(data);
    return;
  }
  if (req.body.dataHome_team) dataHome_team = req.body.dataHome_team;
  else {
    console.log("ERROR : no dataHome_team returned");
    data = {
      error: true,
      message: "no dataHome_team",
    };
    res.status(403).json(data);
    return;
  }
  if (req.body.dataHeure) dataHeure = req.body.dataHeure;
  else {
    console.log("ERROR : no dataHomedataHeureteam returned");
    data = {
      error: true,
      message: "no dataHeure",
    };
    res.status(403).json(data);
    return;
  }

  var sql = "INSERT INTO `games` ( `round_number`, `date`, `location`, `home_team`, `away_team`, `group`, `home_team_score`, `away_team_score`) VALUES ( '2', ?, 'test', ?, ?, '2', NULL, NULL); ";
  const utcStr = new Date()
  connection.query(sql, [utcStr, dataHome_team,dataAway_team], (err, result, fields) => {
    if (err) throw err;
    console.log(result)
    results=JSON.parse(JSON.stringify(result))
    console.log(results)
    if(results.affectedRows==1){
      data = {
        message: "match added",
      };
      res.status(200).json(data)
    }
    else{
      data = {
        error: true,
        message: "no dataHeure",
      };
      res.status(400).json(data)

    }
  });
});

router.get("/getusers", async (req, res) => {
  console.log("test")
});


module.exports = router;
