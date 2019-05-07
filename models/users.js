module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [5]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    isManager: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  User.associate = function(models) {
    User.belongsTo(models.Apartment, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;
};
