

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
  if (req.body.mail)
  mail = req.body.mail
  else{
    console.log("ERROR : no mail returned");
    res.status(500).send("no mail");
    return;
  }




  var sql = 'select * from user where mail = ?;';

   connection.query(sql,[mail],  (err, result, fields) => {
    
    if (err) throw err;

    if(result.length > 0) {
      res.send("mail already taken")
      

    }
    else {

      var sql = 'select * from user where username = ?;';

      connection.query(sql,[mail],  (err, result, fields) => {
       
       if (err) throw err;
   
       if(result.length > 0) {
         res.send("username already taken")
         
   
       }
       else {
   
        var sql = 'insert into user(username, mail, mdp) values (?,?,?);';
        connection.query(sql, [username, mail, password],  (err, result, fields) => {
        if(err) throw err;
        const token = generateAccessToken({ username: username });
        res.json(token);
      
        
      
      })
   
   

   
       }
     })




    }
  })





})



function generateAccessToken(username) {
  return jwt.sign(username, process.env.JWT_SECRET, { expiresIn: '10d' });
}







module.exports = router;





