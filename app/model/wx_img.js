/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wx_img', {
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
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pic: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    url: {
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
    title: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    goods_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'wx_img'
  });

  Model.associate = function() {

  }

  return Model;
};
