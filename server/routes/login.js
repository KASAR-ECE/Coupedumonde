var express = require("express"),
  router = express.Router();
const jwt = require("jsonwebtoken");
require("crypto").randomBytes(64).toString("hex");
const bcrypt = require("bcrypt");
const fs = require("fs");

var connection = require("../db");

const auth = require("../middleware/auth");

router.post("/", async (req, res) => {
  var mailstate = false;
  var usernamestate = false;
  if (req.body.username) username = req.body.username;
  else {
    console.log("ERROR : no username returned");
    data = {
      error: true,
      message: "no username",
    };
    res.status(403).json(data);
    return;
  }
  if (req.body.password) password = req.body.password;
  else {
    console.log("ERROR : no password returned");
    data = {
      error: true,
      message: "no password",
    };
    res.status(403).json(data);
    return;
  }

  const salt = fs.readFileSync("./secret", "utf-8");
  password = await bcrypt.hash(password, salt);

  var sql = "select * from user where username=? AND mdp=?;";

  connection.query(sql, [username, password], (err, result, fields) => {
    if (err) throw err;
    if (result.length == 1) {
      results=JSON.parse(JSON.stringify(result))
      console.log(results[0].is_admin)
      if(results[0].is_admin == 1){

        token = jwt.sign({username:username,"is_admin":true}, process.env.JWT_SECRET, { expiresIn: "10d" });
        res.status(200).json({ token });
      }
      else{

        token = jwt.sign({username:username}, process.env.JWT_SECRET, { expiresIn: "10d" });
        res.status(200).json({ token });
      }
      
      
    } else {
      data = {
        error: true,
        message: "invalid username / password",
      };
      res.status(403).json(data);
    }
  });
});



module.exports = router;
