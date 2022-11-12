const express = require('express')
const votesController = require('../controllers/votes');

const votesRouter = express.Router();

votesRouter
    .get('/', (req, resp) => {
        // resp.writeHead(200, { 'Content-Type': 'text/json' })
        votesController.getAll((err, res) => {
            let respObj
            if (err) {
                respObj = {
                    status: "error",
                    msg: err.message
                }
                return resp.status(400).json(respObj)
            }
            respObj = {
                status: "success",
                msg: res
            }
            resp.send(respObj)
            // console.log(respObj)
        })
    })
    .get('/:userID', (req, resp) => {
        const userID = req.params.userID;
        votesController.getAllVotesUser(userID, (err, res) => {
            let respObj
            if (err) {
                respObj = {
                    status: "error",
                    msg: err.message
                }
                return resp.status(400).json(respObj)
            }
            respObj = {
                status: "success",
                msg: res
            }
            resp.send(respObj)
            // console.log(respObj)
        })
    })
    .get('/:userID/:gameID', (req, resp) => {
        const userID = req.params.userID;
        const gameID = req.params.gameID;
        votesController.getOneVotesUser(userID, gameID, (err, res) => {
            let respObj
            if (err) {
                respObj = {
                    status: "error",
                    msg: err.message
                }
                return resp.status(400).json(respObj)
            }
            respObj = {
                status: "success",
                msg: res
            }
            resp.send(respObj)
            // console.log(respObj)
        })
    })
    .post('/', (req, resp) => {
        votesController.createVote(req.body, (err, res) => {
            let respObj
            if (err) {
                respObj = {
                    status: "error",
                    msg: err.message,
                }
                return resp.status(400).json(respObj)
            }
            respObj = {
                status: "success",
                msg: res
            }
            resp.status(201).json(respObj)
        })
    })

module.exports = votesRouter;