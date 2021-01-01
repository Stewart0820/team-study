/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('friend_link', {
    link_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    link_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    link_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    link_logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    orderby: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '50'
    },
    is_show: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    target: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'friend_link'
  });

  Model.associate = function() {

  }

  return Model;
};
