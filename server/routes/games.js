const express = require("express");
const gamesController = require("../controllers/games");

const gamesRouter = express.Router();

gamesRouter
  .get("/", (req, resp) => {
    // resp.writeHead(200, { 'Content-Type': 'text/json' })
    gamesController.getAll((err, res) => {
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
  .get("/:gameID", (req, resp) => {
    const gameID = req.params.gameID;
    gamesController.getOneGame(gameID, (err, res) => {
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
  });

module.exports = gamesRouter;
