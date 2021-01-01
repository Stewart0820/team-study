/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_article', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    article_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    usertype: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      default:1
    },
   
  }, {
    tableName: 'user_article'
  });

  Model.associate = function() {

  }

  return Model;
};
