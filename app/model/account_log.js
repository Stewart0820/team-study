/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('account_log', {
    log_id: {
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
    user_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    frozen_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    pay_points: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      defaultValue: '0'
    },
    change_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    order_sn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    order_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'account_log'
  });

  Model.associate = function() {

  }

  return Model;
};
