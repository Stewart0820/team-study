/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('permission', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    router_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    router_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    enable: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue:'1'
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue:0
    }
  }, {
    tableName: 'permission'
  });

  Model.associate = function() {

  }

  return Model;
};
