var connection = require("../config/connection.js");

var orm = {
  
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(tableInput, col, valOfCol, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    console.log(col)
    console.log(valOfCol);

    connection.query(queryString, [tableInput, col, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(tableInput, col, condition, cb) {
    var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";

    console.log(col);
    //console.log(valOfCol);
    console.log(condition);
    
    connection.query(queryString, [tableInput, col, condition], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;