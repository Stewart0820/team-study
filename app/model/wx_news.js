/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wx_news', {
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
    createtime: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ''
    },
    uptatetime: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ''
    },
    token: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    img_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'wx_news'
  });

  Model.associate = function() {

  }

  return Model;
};
