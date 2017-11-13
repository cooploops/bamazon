# bamazon

## Hosted on GitHub
 - https://github.com/cooploops/bamazon

## Description on how to use the app

This app is a simple CLI demonstrating the incorporation of a SQL database. Once the js file is run with node by "$node bamazonCustomer.js" then a display of what's inside the DB to purchase will display in the window. A prompt will follow asking which product you would like to purchase via matching ID. Then it will ask how many, checking to see if there are enough in the DB. If there is not enough then it will state so and return you back to start asking which product you would like to purchase. After successfully running through all the prompts then you will be exited from the prompts and told how much you purchase came to. 

## Requirements

- Create a MySQL database

- Connect to the DB, display what's inside it, and be able to perform CRUD operations on it via user inputs through inquirer

## Technologies Used
- Node.js
- Javascript
- SQL
- DOTENV, MySQL, Inquirer Packages
- Request.js


## Code Explanation
### Overall Lesson Learned
- This hw helped me learned how to incorporate a DB into an app. Although simple in nature it took me awhile to get this working because of minor nuances. For example I didn't know a List type prompt with inquirer had to have it's choices as strings, even numbers. Troubleshooting that specific issue was quite annoying especially since there was little documentation on the inquirer about list type prompts. Connecting to the SQL DB, querying data, and modifying the DB based on user inputs was simple enough though for this.

### Specific Lessons Learned
- Inquirer requires strings for its list type prompt for the choices and always returns strings inside an array in it's promise. Also make sure to add a connection.end() call to the SQL DB to close out the process when done.