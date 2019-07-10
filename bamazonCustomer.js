var mysql = require('mysql');

var connect = mysql.createConnection({
  host: "localhost",
  port:3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});

connect.connect(function(err) {
  if (err) throw err;
  connect.query("SELECT * FROM products", function (err, res, fields) {
    if (err) throw err;

    console.log("Available Products");
    console.log("-----------------------------------");

    for (var i = 0; i < res.length; i++) {
        console.log( res[i].id + " : " + res[i].product_name + " | " + res[i].department_name + " Department" + " | " + "$" + res[i].price);
      }
      console.log("-----------------------------------");
    });
});