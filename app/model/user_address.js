/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_address', {
    address_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    consignee: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    country: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    province: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    city: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    district: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    twon: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    address: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ''
    },
    zipcode: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    mobile: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    is_default: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    is_pickup: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'user_address'
  });

  Model.associate = function() {

  }

  return Model;
};
