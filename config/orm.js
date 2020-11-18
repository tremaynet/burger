var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, columns, values, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (?,?)";

    console.log(queryString);

    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // example of updateObject is { devoured : true }
  updateOne: function(table, updateObject, condition, cb) {
    var queryString = "UPDATE " + table;
    var key = Object.keys(updateObject)[0];
    var value = Object.values(updateObject)[0];

    queryString += " SET ";
    queryString += key + "=" + value;
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;