module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
  });
  return Product;
};
