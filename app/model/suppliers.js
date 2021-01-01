/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('suppliers', {
    suppliers_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    suppliers_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    suppliers_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_check: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    suppliers_contacts: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    suppliers_phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    province_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    city_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'suppliers'
  });

  Model.associate = function() {

  }

  return Model;
};
