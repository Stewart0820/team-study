/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('pick_up', {
    pickup_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pickup_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    pickup_address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    pickup_phone: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ''
    },
    pickup_contact: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    province_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    city_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    district_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    suppliersid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'pick_up'
  });

  Model.associate = function() {

  }

  return Model;
};
