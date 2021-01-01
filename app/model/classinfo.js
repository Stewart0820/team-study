/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('classinfo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    classinfo_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    depart_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'classinfo'
  });

  Model.associate = function() {

  }

  return Model;
};
