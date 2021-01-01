/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('topic', {
    topic_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic_title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    topic_image: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    topic_background_color: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    topic_background: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    topic_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    topic_repeat: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    topic_state: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    topic_margin_top: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: '0'
    },
    ctime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'topic'
  });

  Model.associate = function() {

  }

  return Model;
};
