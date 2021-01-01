/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('distribut_goods', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    goods_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    goods_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sales: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'distribut_goods'
  });

  Model.associate = function() {

  }

  return Model;
};
