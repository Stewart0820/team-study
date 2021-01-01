/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('article_cat', {
    cat_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cat_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cat_type: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '0'
    },
    parent_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '0'
    },
    show_in_nav: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    sort_order: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '50'
    },
    cat_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keywords: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cat_alias: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'article_cat'
  });

  Model.associate = function() {

  }

  return Model;
};
