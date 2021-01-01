/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('wx_user', {
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
    wxname: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    aeskey: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ''
    },
    encode: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    appid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    appsecret: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    wxid: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    weixin: {
      type: DataTypes.CHAR(64),
      allowNull: false
    },
    headerpic: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    token: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    w_token: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    updatetime: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tplcontentid: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ''
    },
    share_ticket: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    share_dated: {
      type: DataTypes.CHAR(15),
      allowNull: false
    },
    authorizer_access_token: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    authorizer_refresh_token: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    authorizer_expires: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    web_access_token: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ''
    },
    web_refresh_token: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    web_expires: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    qr: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    menu_config: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wait_access: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'wx_user'
  });

  Model.associate = function() {

  }

  return Model;
};
