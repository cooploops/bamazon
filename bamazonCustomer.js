const inquirer = require("inquirer");
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

connection.connect(function(err){
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
    displayInventory();
});

function displayInventory() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
    });
  }

inquirer.prompt([
    {
        type:"list",
        name:"idList",
        message:"Which product ID would you like to buy?"
    },
    {
        type:"input",
        name:"quantity",
        message: "How many of that product would you like to purchase?"
    }
]).then(function(answer){
    
})