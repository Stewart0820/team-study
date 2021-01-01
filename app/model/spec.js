/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('spec', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    name: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '50'
    },
    search_index: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'spec'
  });

  Model.associate = function() {

  }

  return Model;
};
