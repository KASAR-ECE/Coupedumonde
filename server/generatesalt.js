const bcrypt = require("bcrypt");

bcrypt.genSalt(10, (err, salt) => {
  console.log(salt);
});
