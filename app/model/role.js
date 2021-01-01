/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('role', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    describe: {
      type: DataTypes.STRING(200),
      allowNull: true
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
    tableName: 'role'
  });

  Model.associate = function() {

  }

  return Model;
};
