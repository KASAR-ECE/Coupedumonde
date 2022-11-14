var express = require("express"),
router = express.Router();
const jwt = require("jsonwebtoken");
require("crypto").randomBytes(64).toString("hex");
const bcrypt = require("bcrypt");
require("dotenv").config();

var connection = require("../db");

const auth = require("../middleware/auth");

router.post("/", async (req, res) => {
  let password;
  if (req.body.username) username = req.body.username;
  else {
    console.log("ERROR : no username");
    data = {
      error: true,
      message: "No username",
    };
    res.status(403).json(data);
    return;
  }
  if (req.body.password) password = req.body.password;
  else {
    data = {
      error: true,
      message: "No password",
    };
    res.status(403).json(data);
    return;
  }
  if (req.body.passwordConfirmation) confirmedpassword = req.body.passwordConfirmation;
  else {
    console.log("ERROR : no confirmedpassword");
    data = {
      error: true,
      message: "No confirmed password",
    };
    res.status(403).json(data);
    return;
  }

  if (req.body.mail) mail = req.body.mail;
  else {
    console.log("ERROR : no mail");
    data = {
      error: true,
      message: "no mail",
    };
    res.status(403).json(data);
    return;
  }

  if (confirmedpassword != password){
    console.log("ERROR : password differents");
    data = {
      error: true,
      message: "Passwords differents",
    };
    res.status(403).json(data);
    return;
  }
 
  var sql = "select * from user where mail = ?;";

  connection.query(sql, [mail], (err, result, fields) => {
    if (err) throw err;

    if (result.length > 0) {
      data = {
        error: true,
        message: "mail already taken",
      };
      res.status(403).json(data);
    }
    if (result.length == 0) {
      console.log("checked");

      var sql = "select * from user where username = ?;";

      connection.query(sql, [username], async (err, result, fields) => {
        console.log(result);
        if (err) throw err;

        if (result.length > 0) {
          data = {
            error: true,
            message: "username already taken",
          };
          res.status(403).json(data);
        }
        if (result.length == 0) {
          console.log("checked");

          password = await bcrypt.hash(password, process.env.SALT);

          console.log(password);

          var sql = "insert into user(username, mail, mdp) values (?,?,?);";
          connection.query(
            sql,
            [username, mail, password],
            (err, result, fields) => {
              if (err) throw err;
              const token = generateAccessToken({ username: username });


              res.status(200).json({token});
            }
          );
        }
      });
    }
  });
});

function generateAccessToken(username) {
  return jwt.sign(username, process.env.JWT_SECRET, { expiresIn: "10d" });
}

module.exports = router;
