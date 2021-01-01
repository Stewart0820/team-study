/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('flash_sale', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    goods_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    item_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '0'
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    goods_num: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '1'
    },
    buy_limit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    buy_num: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    order_num: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    end_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    is_end: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    goods_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'flash_sale'
  });

  Model.associate = function() {

  }

  return Model;
};
