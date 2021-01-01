/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('invoice', {
    invoice_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    invoice_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    invoice_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    invoice_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoice_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoice_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    taxpayer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    atime: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    ctime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'invoice'
  });

  Model.associate = function() {

  }

  return Model;
};
