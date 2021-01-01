/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('spec_item', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    spec_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    item: {
      type: DataTypes.STRING(54),
      allowNull: true
    }
  }, {
    tableName: 'spec_item'
  });

  Model.associate = function() {

  }

  return Model;
};
