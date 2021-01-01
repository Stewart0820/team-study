/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_extend', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    invoice_title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    taxpayer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    invoice_desc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    realname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idcard: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'user_extend'
  });

  Model.associate = function() {

  }

  return Model;
};
