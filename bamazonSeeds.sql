DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_ICREMENT,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price DECIMAL(10,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dining chair","Furniture",100.00,50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dining room table","Furniture",250.00,15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("King Size Mattress","Furniture",150.00,50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keurig","Kitchen Appliance",100.00,150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flat Screen TV","Electronics",100.00,50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch","Electronics",300.00,200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee table","furniture",80.00,50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Couch","furniture",350.00,100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Washer/Dryer","Appliance",400.00,50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bean bag chair","furniture",40.00,400);