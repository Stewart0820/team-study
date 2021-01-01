/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('goods_coupon', {
    coupon_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    goods_category_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    }
  }, {
    tableName: 'goods_coupon'
  });

  Model.associate = function() {

  }

  return Model;
};
