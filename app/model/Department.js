/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('Department', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    depart_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    depart_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    depart_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'Department'
  });

  Model.associate = function() {

  }

  return Model;
};
