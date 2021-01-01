/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('spec_goods_price', {
    item_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    key_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    store_count: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true,
      defaultValue: '10'
    },
    bar_code: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: ''
    },
    sku: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: ''
    },
    spec_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prom_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    prom_type: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'spec_goods_price'
  });

  Model.associate = function() {

  }

  return Model;
};
