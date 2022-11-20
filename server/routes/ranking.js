const express = require("express");
const rankController = require("../controllers/ranking");
const rankingRouter = express.Router();

rankingRouter
  .get("/", (req, resp) => {
    rankController.getAll((err, res) => {
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
    });
  })
  .get("/:username", (req, resp) => {
    const username = req.params.username;
    rankController.getScoreUser(username, (err, res) => {
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
    });
  })

module.exports = rankingRouter;
