const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
function handledisconnect(){
connection.connect((err) => {
  if (err) throw err
  {console.log("Database Connected...");
  setTimeout(handleDisconnect, 2000);
}
});

connection.on('error', function(err) {
  console.log('db error', err);
  if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
    handleDisconnect();                         
  } else {                                      
    
    throw err;                                  
    
  }
});

}


module.exports = connection;
