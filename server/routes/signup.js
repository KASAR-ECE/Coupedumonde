var express = require("express"),
  router = express.Router();
const jwt = require("jsonwebtoken");
require("crypto").randomBytes(64).toString("hex");
const bcrypt = require("bcrypt");
require("dotenv").config();
const fs = require("fs");

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
  if (req.body.passwordConfirmation)
    confirmedpassword = req.body.passwordConfirmation;
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

  if (confirmedpassword != password) {
    console.log("ERROR : password differents");
    data = {
      error: true,
      message: "Passwords differents",
    };
    res.status(403).json(data);
    return;
  }
  if (!mail.includes("@edu.ece.fr")) {
    console.log("ERROR : password differents");
    data = {
      error: true,
      message: "You must be a ECE student",
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
      var sql = "select * from user where username = ?;";

      connection.query(sql, [username], async (err, result, fields) => {
        if (err) throw err;

        if (result.length > 0) {
          data = {
            error: true,
            message: "username already taken",
          };
          res.status(403).json(data);
        }
        if (result.length == 0) {
          const salt = fs.readFileSync("./secret", "utf-8");
          password = await bcrypt.hash(password, salt);

          var sql = "insert into user(username, mail, mdp) values (?,?,?);";
          connection.query(
            sql,
            [username, mail, password],
            (err, result, fields) => {
              if (err) throw err;
              const token = generateAccessToken({ username: username });
              const data = {
                error: false,
                token,
                username: username,
                email: mail,
                score: 0, //by default, the score of the user is 0
              };
              res.status(200).json(data);
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
