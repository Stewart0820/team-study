/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('shipping_area', {
    shipping_area_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shipping_area_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ''
    },
    shipping_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    config: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    update_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_default: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'shipping_area'
  });

  Model.associate = function() {

  }

  return Model;
};
