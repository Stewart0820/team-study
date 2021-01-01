/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_role', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: '0'
    },
    user_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: ''
    },
    role_id: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'user_role'
  });

  Model.associate = function() {

  }

  return Model;
};
