/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('admin_role', {
    role_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    act_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    role_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'admin_role'
  });

  Model.associate = function() {

  }

  return Model;
};
