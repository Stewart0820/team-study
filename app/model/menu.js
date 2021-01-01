/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('menu', {
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
    enable: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue:'1'
    }
  }, {
    tableName: 'menu'
  });

  Model.associate = function() {

  }

  return Model;
};
