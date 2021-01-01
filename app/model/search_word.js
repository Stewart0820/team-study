/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('search_word', {
    id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    pinyin_full: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    pinyin_simple: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    search_num: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    goods_num: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'search_word'
  });

  Model.associate = function() {

  }

  return Model;
};
