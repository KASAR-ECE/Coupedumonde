if [ ! -f ./server/secret ]
then
    var=$(node server/generatesalt.js)
    echo $var >> server/secret
fi