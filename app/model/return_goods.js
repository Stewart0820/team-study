/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('return_goods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rec_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    order_sn: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    goods_num: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '1'
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    describe: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    imgs: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: ''
    },
    addtime: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    remark: {
      type: DataTypes.STRING(1024),
      allowNull: true,
      defaultValue: ''
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    spec_key: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: ''
    },
    seller_delivery: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    refund_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    refund_deposit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    refund_integral: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    refund_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    refund_mark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    refund_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    is_receive: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'return_goods'
  });

  Model.associate = function() {

  }

  return Model;
};
