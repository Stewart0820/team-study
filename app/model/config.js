/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('config', {
    id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    inc_type: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'config'
  });

  Model.associate = function() {

  }

  return Model;
};
