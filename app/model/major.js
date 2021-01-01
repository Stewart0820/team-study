/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('major', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    major_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    major_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    depart_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'major'
  });

  Model.associate = function() {

  }

  return Model;
};
