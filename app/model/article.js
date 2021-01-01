/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('article', {
    article_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cat_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '0'
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    author_email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    is_open: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    add_time: {
      type: DataTypes.INTEGER(13).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
   
    open_type: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    click: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    recommend_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    recommend_count: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    top: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    checked: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    publish_time: {
      type: DataTypes.INTEGER(13),
      allowNull: true
    },
    thumb: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'article'
  });

  Model.associate = function() {

  }

  return Model;
};
