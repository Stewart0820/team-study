/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bucket', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    createtime:{
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  }, {
    tableName: 'bucket'
  });

  Model.associate = function() {

  }

  return Model;
};
