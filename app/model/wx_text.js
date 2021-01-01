/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wx_text', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    uname: {
      type: DataTypes.STRING(90),
      allowNull: false,
      defaultValue: ''
    },
    keyword: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    precisions: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createtime: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ''
    },
    updatetime: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ''
    },
    click: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    token: {
      type: DataTypes.CHAR(30),
      allowNull: false
    }
  }, {
    tableName: 'wx_text'
  });

  Model.associate = function() {

  }

  return Model;
};
