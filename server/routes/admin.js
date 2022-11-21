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
  var token
	try {

		token = jwt.verify(cookie.token, process.env.JWT_SECRET)
	} catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {

			return res.status(401).end()
		}

		return res.status(400).end()
	}

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
  var score_away = req.body.dataScore_away
  console.log(score_away)
  if (typeof(score_away) === "undefined"){
    
    console.log("ERROR : no score_away returned");
    data = {
      error: true,
      message: "no score_away",
    };
    res.status(403).json(data);
    return;
  }
  var score_home = req.body.dataAway_team
  console.log(score_home)
  if (typeof(score_home) === "undefined"){
    
    console.log("ERROR : no score_home returned");
    data = {
      error: true,
      message: "no score_home",
    };
    res.status(403).json(data);
    return;
  }
  var cote_away = req.body.dataScore_away
  console.log(cote_away)
  if (typeof(cote_away) === "undefined"){
    
    console.log("ERROR : no cote_away returned");
    data = {
      error: true,
      message: "no cote_away",
    };
    res.status(403).json(data);
    return;
  }
  var cote_home = req.body.dataCote_home
  console.log(cote_home)
  if (typeof(cote_home) === "undefined"){
    
    console.log("ERROR : no cote_home returned");
    data = {
      error: true,
      message: "no cote_home",
    };
    res.status(403).json(data);
    return;
  }
  var sql = "SELECT is_admin FROM user WHERE username=? ";

  connection.query(sql, token.username, (err, result, fields) => {
    if (err) throw err;
    results = JSON.parse(JSON.stringify(result))
    console.log(results[0])
    if(results[0].is_admin==0){
      console.log("ERROR : You are not admin");
    data = {
      error: true,
      message: "You are not admin",
    };
    res.status(403).json(data);
    return;
    }
    res.status(200).json({ msg: results, status: "success" })

  });


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
  
  var token
	try {

		token = jwt.verify(cookie.token, process.env.JWT_SECRET)
	} catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {

			return res.status(401).end()
		}

		return res.status(400).end()
	}

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
  var token
	try {

		token = jwt.verify(cookie.token, process.env.JWT_SECRET)
	} catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {

			return res.status(401).end()
		}

		return res.status(400).end()
	}

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

  connection.query(sql, token.username, (err, result, fields) => {
    if (err) throw err;
    results = JSON.parse(JSON.stringify(result))
    console.log(results[0])
    if(results[0].is_admin==0){
      console.log("ERROR : You are not admin");
    data = {
      error: true,
      message: "You are not admin",
    };
    res.status(403).json(data);
    return;
    }
    res.status(200).json({ msg: results, status: "success" })

  });


  var sql = "SELECT is_admin FROM user WHERE username=? ";

  connection.query(sql, username, (err, result, fields) => {
    if (err) throw err;
    results = JSON.parse(JSON.stringify(result))
    console.log(results[0])
    if(results[0].is_admin==1){
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
router.post("/modifymatch", async (req, res) => {
  const cookie = parseCookies(req);
  if(isEmpty(cookie)){
    respObj = {
      error: true,
      msg: "You are not logged in",
    };
    res.status(403).json(respObj);
    return;
  }
  var token
	try {

		token = jwt.verify(cookie.token, process.env.JWT_SECRET)
	} catch (e) {
		if (e instanceof jwt.JsonWebTokenError) {

			return res.status(401).end()
		}

		return res.status(400).end()
	}

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

  if (req.body.match_id) match_id = req.body.match_id;
  else {
    console.log("ERROR : no match_id returned");
    data = {
      error: true,
      message: "no match_id",
    };
    res.status(403).json(data);
    return;
  }

  if (req.body.team_away) team_away = req.body.team_away;
  else {
    console.log("ERROR : no team_away returned");
    data = {
      error: true,
      message: "no team_away",
    };
    res.status(403).json(data);
    return;
  }
  if (req.body.team_home) team_home = req.body.team_home;
  else {
    console.log("ERROR : no team_home returned");
    data = {
      error: true,
      message: "no team_home",
    };
    res.status(403).json(data);
    return;
  }
  if (req.body.hour) hour = req.body.hour;
  else {
    console.log("ERROR : no hour returned");
    data = {
      error: true,
      message: "no hour",
    };
    res.status(403).json(data);
    return;
  }
  if (req.body.cote_home) cote_home = req.body.cote_home;
  else {
    console.log("ERROR : no cote_home returned");
    data = {
      error: true,
      message: "no cote_home",
    };
    res.status(403).json(data);
    return;
  }
  if (req.body.cote_away) cote_away = req.body.cote_away;
  else {
    console.log("ERROR : no cote_away returned");
    data = {
      error: true,
      message: "no cote_away",
    };
    res.status(403).json(data);
    return;
  }
  console.log(req.body.score_home)

  var score_home = req.body.score_home
  console.log(score_home)
  if (typeof(score_home) === "undefined"){
    
    console.log("ERROR : no score_home returned");
    data = {
      error: true,
      message: "no score_home",
    };
    res.status(403).json(data);
    return;
  }
  var score_away = req.body.score_away
  console.log(score_away)
  if (typeof(score_away) === "undefined"){
    
    console.log("ERROR : no score_away returned");
    data = {
      error: true,
      message: "no score_away",
    };
    res.status(403).json(data);
    return;
  }
  var sql = "SELECT is_admin FROM user WHERE username=? ";

  connection.query(sql, token.username, (err, result, fields) => {
    if (err) throw err;
    results = JSON.parse(JSON.stringify(result))
    console.log(results[0])
    if(results[0].is_admin==0){
      console.log("ERROR : You are not admin");
    data = {
      error: true,
      message: "You are not admin",
    };
    res.status(403).json(data);
    return;
    }
    res.status(200).json({ msg: results, status: "success" })

  });


  var sql = "UPDATE `games` SET  home_team=?, away_team=?, home_team_score=?, away_team_score=? WHERE match_id=?";


  connection.query(sql, [team_home, team_away, score_home, score_away, match_id], (err, result, fields) => {
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



module.exports = router;
