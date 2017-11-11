const mysql = require("mysql");
const inquirer = require("inquirer");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

function displayInventory() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for(i=0;i<res.length;i++){
          console.log(`
          ID: ${res[i].item_id}
          Product: ${res[i].product_name}
          Department:${res[i].department_name}
          Price:$${res[i].price}
          Quantity:${res[i].stock_quantity}
          -------------------------------------`);
      };
      start();      
    });
  }

function displayPurchase(answer){
    connection.query("SELECT price FROM products WHERE?",{item_id: answer.idList},function(err,res){
        if (err) throw err;
        let total = (answer.quantity * res[0].price);
        console.log("Your total comes to " + total);
        connection.end();
    })
}

function updateInventory(answer, quantityLeft){
    // console.log("update " + answer.idList);
    // console.log("update " + quantityLeft);
    connection.query("UPDATE products SET ? WHERE ?",[{stock_quantity: quantityLeft},{item_id: answer.idList}],function(err,res){
        if (err) throw err;
        // console.log(res.affectedRows + " product added to cart!");
        displayPurchase(answer)
    });
}

function checkInventory(answer) {
    // console.log("check " + answer.idList + " " + answer.quantity);
    connection.query("SELECT stock_quantity FROM products WHERE ?",{item_id: answer.idList}, function(err, res){
        if (err) throw err;
        // console.log(res[0].stock_quantity);
        if (res[0].stock_quantity < answer.quantity){
            console.log("Insufficient quantity!");
            start();
        } else {
            // console.log(res[0].stock_quantity);
            var quantLeft = res[0].stock_quantity - answer.quantity;
            // console.log(quantLeft);
            updateInventory(answer, quantLeft);
        }
    })
}

function start(){
    console.log("hit");
    inquirer.prompt([
        {
            type: "input",
            name: "idList",
            message: "Which product ID would you like to buy?",
            validate: function(value){
                if(0<value && value<=10){
                    return true;
                }
                return false;
            }
        },
        {
            type: "input",
            name: "quantity",
            message: "How many of that product would you like to purchase?",
            validate: function(num){
                if(isNaN(num) === false){
                    return true;
                }
                return false;
            }
        }
    ]).then(function(answer){
        // console.log(answer);
        checkInventory(answer);
    })
};

connection.connect(function(err){
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
    displayInventory();
});