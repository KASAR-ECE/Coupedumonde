var express = require("express"),
  router = express.Router();
const jwt = require("jsonwebtoken");
require("crypto").randomBytes(64).toString("hex");
const bcrypt = require("bcrypt");
const fs = require("fs");
const { parseCookies } = require("../middleware/parseCookies");
const { isEmpty } = require("../middleware/parseCookies");
const { parseJwt } = require("../middleware/parseCookies")

var connection = require("../db");

const auth = require("../middleware/auth");
const { parse } = require("path");

router.post("/addmatch", async (req, res) => {
  const cookie = parseCookies(req);
  if(isEmpty(cookie)){
    respObj = {
      error: true,
      msg: "You are not logged in",
    };
    res.status(403).json(respObj);
    return;
  }
  var token = parseJwt(cookie.token)

  if(isEmpty(token)){
    respObj = {
      status: "error",
      msg: "You are not logged in",
    };
    res.status(403).json(respObj);
    return;
  }
  if(typeof(token.username) === "undefined"){
    respObj = {
      status: "error",
      msg: "You are not logged in",
    };
    res.status(403).json(respObj);
    return;
  }
  if(typeof(token.is_admin) === "undefined"){
    respObj = {
      status: "error",
      msg: "You are not admin",
    };
    res.status(403).json(respObj);
    return;
  }
  if (req.body.username) username = req.body.username;
  else {
    console.log("ERROR : no username sent");
    data = {
      error: true,
      message: "no username",
    };
    res.status(403).json(data);
    return;
  }

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
  connection.query(sql, [utcStr, dataHome_team, dataAway_team], (err, result, fields) => {
    if (err) throw err;
    console.log(result)
    results = JSON.parse(JSON.stringify(result))
    console.log(results)
    if (results.affectedRows == 1) {
      data = {
        message: "match added",
      };
      res.status(200).json(data)
    }
    else {
      data = {
        error: true,
        message: "no dataHeure",
      };
      res.status(400).json(data)

    }
  });
});

router.get("/getusers", async (req, res) => {

  const cookie = parseCookies(req);
  if(isEmpty(cookie)){
    respObj = {
      error: true,
      msg: "You are not logged in",
    };
    res.status(403).json(respObj);
    return;
  }
  var token = parseJwt(cookie.token)

  if(isEmpty(token)){
    respObj = {
      status: "error",
      msg: "You are not logged in",
    };
    res.status(403).json(respObj);
    return;
  }
  if(typeof(token.username) === "undefined"){
    respObj = {
      status: "error",
      msg: "You are not logged in",
    };
    res.status(403).json(respObj);
    return;
  }
  if(typeof(token.is_admin) === "undefined"){
    respObj = {
      status: "error",
      msg: "You are not admin",
    };
    res.status(403).json(respObj);
    return;
  }



  var sql = "SELECT username, mail, score, is_admin FROM user";

  connection.query(sql, (err, result, fields) => {
    if (err) throw err;
    results = JSON.parse(JSON.stringify(result))

    res.status(200).json({ msg: results, status: "success" })

  });


});

router.post("/deleteuser", async (req, res) => {

  const cookie = parseCookies(req);
  if(isEmpty(cookie)){
    respObj = {
      error: true,
      msg: "You are not logged in",
    };
    res.status(403).json(respObj);
    return;
  }
  var token = parseJwt(cookie.token)

  if(isEmpty(token)){
    respObj = {
      status: "error",
      msg: "You are not logged in",
    };
    res.status(403).json(respObj);
    return;
  }
  if(typeof(token.username) === "undefined"){
    respObj = {
      status: "error",
      msg: "You are not logged in",
    };
    res.status(403).json(respObj);
    return;
  }
  if(typeof(token.is_admin) === "undefined"){
    respObj = {
      status: "error",
      msg: "You are not admin",
    };
    res.status(403).json(respObj);
    return;
  }
  if (req.body.username) username = req.body.username;
  else {
    console.log("ERROR : no username sent");
    data = {
      error: true,
      message: "no username",
    };
    res.status(403).json(data);
    return;
  }


  var sql = "SELECT is_admin FROM user WHERE username=? ";

  connection.query(sql, username, (err, result, fields) => {
    if (err) throw err;
    results = JSON.parse(JSON.stringify(result))
    console.log(results[0])
    if(results[0].is_admin==0){
      console.log("ERROR : Can't delete admin");
    data = {
      error: true,
      message: "can't delete admin",
    };
    res.status(403).json(data);
    return;
    }
    res.status(200).json({ msg: results, status: "success" })

  });
  /*

  var sql = "DELETE FROM user WHERE username=? ";

  connection.query(sql, username, (err, result, fields) => {
    if (err) throw err;
    results = JSON.parse(JSON.stringify(result))
    console.log(results)
    res.status(200).json({ message: results, status: "success" })

  });
  */



});


module.exports = router;
