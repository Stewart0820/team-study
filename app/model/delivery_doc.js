/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('delivery_doc', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    order_sn: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    consignee: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    zipcode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    country: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    province: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    city: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    district: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    shipping_code: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    shipping_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    shipping_price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    invoice_no: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    tel: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    best_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    is_del: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'delivery_doc'
  });

  Model.associate = function() {

  }

  return Model;
};
