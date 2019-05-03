module.exports = function(sequelize, DataTypes) {
  const Payment = sequelize.define("Payment", {
    amount: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Payment.associate = function(models) {
    Payment.belongsTo(models.Users, { as: "Payment" });
  };

  return Payment;
};
