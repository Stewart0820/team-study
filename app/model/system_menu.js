/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('system_menu', {
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
    group: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    right: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_del: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    type: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'system_menu'
  });

  Model.associate = function() {

  }

  return Model;
};
