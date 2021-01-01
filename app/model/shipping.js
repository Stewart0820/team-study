/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('shipping', {
    shipping_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shipping_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    shipping_name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ''
    },
    shipping_desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    insure: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    enabled: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'shipping'
  });

  Model.associate = function() {

  }

  return Model;
};
