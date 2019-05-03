module.exports = function(sequelize, DataTypes) {
  const Payment = sequelize.define("Payment", {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Payment.associate = function(models) {
    Payment.belongsTo(models.User, { as: "Payment" });
  };

  return Payment;
};
