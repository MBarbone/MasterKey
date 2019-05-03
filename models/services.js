module.exports = function(sequelize, DataTypes) {
  const Service = sequelize.define("Service", {
    requestType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    requestDetails: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Service.associate = function(models) {
    Service.belongsTo(models.User, { as: "Service" });
  };

  return Service;
};
