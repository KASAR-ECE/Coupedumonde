nginx
cd /usr/src/app/
npm start &



cd /usr/src/api
if [ ! -f /config/secret ]
then
    var=$(node generatesalt.js)
    echo $var >> /config/secret
fi


cp /config/secret ./

    


nodemon server.js


 
 


