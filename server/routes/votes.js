const express = require("express");
const votesController = require("../controllers/votes");
const { parseCookies } = require("../middleware/parseCookies");

const votesRouter = express.Router();

votesRouter
  .get("/", (req, resp) => {
    // resp.writeHead(200, { 'Content-Type': 'text/json' })
    var user;
    voteData = req.body;
    const token = parseCookies(req);
    let err = {
      message: "You are not logged in",
    };
    if (isEmpty(token) || typeof(token.token)==="undefined") {
      respObj = {
        status: "error",
        msg: err.message,
      };
      return resp.status(403).json(respObj);
    } else {
      user = parseJwt(token.token);
      user = user.username;
    }
    const userID = req.params.userID;
    votesController.getAllVotesUser(user, (err, res) => {
      let respObj;
      if (err) {
        respObj = {
          status: "error",
          msg: err.message,
        };
        return resp.status(400).json(respObj);
      }
      respObj = {
        status: "success",
        msg: res,
      };
      resp.send(respObj);
      // console.log(respObj)
    });
  })
  .get("/:userID", (req, resp) => {
    const userID = req.params.userID;
    votesController.getAllVotesUser(userID, (err, res) => {
      let respObj;
      if (err) {
        respObj = {
          status: "error",
          msg: err.message,
        };
        return resp.status(400).json(respObj);
      }
      respObj = {
        status: "success",
        msg: res,
      };
      resp.send(respObj);
      // console.log(respObj)
    });
  })
  .get("/:userID/:gameID", (req, resp) => {
    var user;
    voteData = req.body;
    const token = parseCookies(req);
    let err = {
      message: "You are not logged in",
    };
    if (isEmpty(token) || typeof(token.token)==="undefined") {
      respObj = {
        status: "error",
        msg: err.message,
      };
      return resp.status(403).json(respObj);
    } else {
      user = parseJwt(token.token);
      user = user.username;
    }
    const userID = req.params.userID;
    const gameID = req.params.gameID;
    votesController.getOneVotesUser(userID, gameID, (err, res) => {
      let respObj;
      if (err) {
        respObj = {
          status: "error",
          msg: err.message,
        };
        return resp.status(400).json(respObj);
      }
      respObj = {
        status: "success",
        msg: res,
      };
      resp.send(respObj);
      // console.log(respObj)
    });
  })
  .post("/", (req, resp) => {
    votesController.createVote(req, (err, res) => {
      let respObj;
      if (err) {
        respObj = {
          status: "error",
          msg: err.message,
        };
        return resp.status(400).json(respObj);
      }
      respObj = {
        status: "success",
        msg: res,
      };
      resp.status(201).json(respObj);
    });
  });

module.exports = votesRouter;

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};
function isEmpty(object) {
  return Object.keys(object).length === 0;
}
