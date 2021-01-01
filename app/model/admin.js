/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('admin', {
    admin_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    admin_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    ec_salt: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    add_time: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    last_login: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '未登录'
    },
    last_ip: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: '0.0.0.0'
    },
    status: {
      type: DataTypes.DECIMAL(1),
      allowNull: false,
      defaultValue: 1
    },
  }, {
    tableName: 'admin'
  });

  Model.associate = function() {

  }

  return Model;
};
