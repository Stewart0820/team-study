/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('recharge', {
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    order_sn: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    account: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00'
    },
    ctime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pay_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pay_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pay_name: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pay_status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'recharge'
  });

  Model.associate = function() {

  }

  return Model;
};
