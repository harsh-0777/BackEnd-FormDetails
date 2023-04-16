const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

  const pool = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    insecureAuth: true,
  });

  pool.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected");
    }
  });
  
  
module.exports = pool.promise();
