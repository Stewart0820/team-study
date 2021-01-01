/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('cart', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    session_id: {
      type: DataTypes.CHAR(128),
      allowNull: false,
      defaultValue: ''
    },
    goods_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    goods_sn: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    goods_name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ''
    },
    market_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    goods_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    member_goods_price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    goods_num: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    spec_key: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: ''
    },
    spec_key_name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: ''
    },
    bar_code: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: ''
    },
    selected: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    add_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    prom_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    prom_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    sku: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'cart'
  });

  Model.associate = function() {

  }

  return Model;
};
