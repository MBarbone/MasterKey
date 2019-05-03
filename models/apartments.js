module.exports = function(sequelize, DataTypes) {
  const Apartment = sequelize.define("Apartment", {
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.INT,
      validate: {
        len: [5]
      }
    }
  });

  Apartment.associate = function(models) {
    Apartment.hasMany(models.Users, { as: "Users" });
  };

  return Apartment;
};
