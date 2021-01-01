/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_sign', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    signtotal: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    signcount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    lastsign: {
      type: DataTypes.CHAR(11),
      allowNull: true,
      defaultValue: '0'
    },
    signtime: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cumtrapz: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    thismonth: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    }
  }, {
    tableName: 'user_sign'
  });

  Model.associate = function() {

  }

  return Model;
};
