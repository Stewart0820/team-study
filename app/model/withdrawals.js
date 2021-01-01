/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('withdrawals', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    check_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    pay_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    refuse_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    bank_card: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    realname: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    taxfee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    pay_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    error_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'withdrawals'
  });

  Model.associate = function() {

  }

  return Model;
};
