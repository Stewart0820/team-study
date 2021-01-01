/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wx_keyword', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    keyword: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: 'TEXT'
    }
  }, {
    tableName: 'wx_keyword'
  });

  Model.associate = function() {

  }

  return Model;
};
