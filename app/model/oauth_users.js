/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('oauth_users', {
    tu_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    openid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    oauth: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    unionid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    oauth_child: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'oauth_users'
  });

  Model.associate = function() {

  }

  return Model;
};
