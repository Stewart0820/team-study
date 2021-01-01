/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('stock_log', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    goods_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    goods_spec: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    order_sn: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    muid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ctime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'stock_log'
  });

  Model.associate = function() {

  }

  return Model;
};
