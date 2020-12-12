module.exports = function(sequelize, DataTypes) {
  
  // 'burger' in the define method, will be the name
  // of the table created in the db
  const Burger = sequelize.define("Burger", {
    // you do not need to define an id
    // sequelize does that for you

    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });


  return Burger;
};
