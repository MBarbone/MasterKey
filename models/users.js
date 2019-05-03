module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false
    },
    _apartment: {
      type: DataTypes.INT,
      defaultValue: false
    }
  });
  User.associate = function(models) {
    User.belongsTo(models.Apartments, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return User;
};
