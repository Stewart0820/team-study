/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_collection', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mobile: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: ''
    },
    contact: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: ''
    },
    why_down: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: ''
    },
    add_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'user_collection'
  });

  Model.associate = function() {

  }

  return Model;
};
