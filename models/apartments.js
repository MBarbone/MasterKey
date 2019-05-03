module.exports = function(sequelize, DataTypes) {
  const Apartment = sequelize.define("Apartment", {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
      type: DataTypes.INTEGER,
      validate: {
        len: [5]
      }
    }
  });

  Apartment.associate = function(models) {
    Apartment.hasMany(models.User);
  };

  return Apartment;
};
