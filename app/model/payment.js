/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('payment', {
    pay_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pay_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    pay_name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ''
    },
    pay_fee: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    pay_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pay_order: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    pay_config: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    enabled: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    is_cod: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    is_online: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'payment'
  });

  Model.associate = function() {

  }

  return Model;
};
