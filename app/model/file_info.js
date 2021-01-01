/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('file_info', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    keyword: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    folder_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    size: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'file_info'
  });

  Model.associate = function() {

  }

  return Model;
};
