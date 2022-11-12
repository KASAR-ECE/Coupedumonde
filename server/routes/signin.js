

var express = require('express'),
router = express.Router();
const jwt = require('jsonwebtoken');
require('crypto').randomBytes(64).toString('hex')


var connection = require('../db')



const auth = require('../middleware/auth');


router.post('/', async (req, res) => {

  var mailstate = false
  var usernamestate = false
  if (req.body.username)
  username = req.body.username
  else{
    console.log("ERROR : no username returned");
    res.status(500).send("no username");
    return;
  }
  if (req.body.password)
  password = req.body.password
  else{
    console.log("ERROR : no password returned");
    res.status(500).send("no password");
    return;
  }





  var sql = 'select * from user where username = ? AND mdp = ?;';

   connection.query(sql,[username,password],  (err, result, fields) => {
    
    if (err) throw err;
    console.log(result)
    if(result.length == 1) {
        const token = generateAccessToken({ username: username });
        res.status(200).json(token);
      

    }
    else {



        res.status(401).send("Invalid password / username")


    }
  })





})



function generateAccessToken(username) {
  return jwt.sign(username, process.env.JWT_SECRET, { expiresIn: '10d' });
}







module.exports = router;





