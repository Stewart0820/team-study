/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('virtual_shop', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    shop_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shop_level: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    shop_intro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shop_logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shop_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    shop_qq: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    shop_theme: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'virtual_shop'
  });

  Model.associate = function() {

  }

  return Model;
};
