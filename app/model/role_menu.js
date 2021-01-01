/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('role_menu', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
    
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    menu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    }
  }, {
    tableName: 'role_menu'
  });

  Model.associate = function() {

  }

  return Model;
};
