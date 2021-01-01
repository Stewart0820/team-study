/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('order', {
    order_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_sn: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    user_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    order_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    shipping_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    pay_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    consignee: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    country: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    province: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    city: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    district: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    twon: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    address: {
      type: DataTypes.STRING(255),
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
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    shipping_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    shipping_name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ''
    },
    pay_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    pay_name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ''
    },
    invoice_title: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: ''
    },
    goods_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    shipping_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    user_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    coupon_price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    integral: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    integral_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    order_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    total_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    add_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    shipping_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    confirm_time: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    pay_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    transaction_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order_prom_type: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    order_prom_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0'
    },
    order_prom_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    discount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    user_note: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    admin_note: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    parent_sn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_distribut: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    paid_money: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    deleted: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'order'
  });

  Model.associate = function() {

  }

  return Model;
};
