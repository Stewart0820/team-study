/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('navigation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: ''
    },
    is_show: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    is_new: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    sort: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '50'
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    position: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'navigation'
  });

  Model.associate = function() {

  }

  return Model;
};
