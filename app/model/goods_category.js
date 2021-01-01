/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('goods_category', {
    id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(90),
      allowNull: false,
      defaultValue: ''
    },
    mobile_name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: ''
    },
    parent_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    parent_id_path: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: ''
    },
    level: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    sort_order: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '50'
    },
    is_show: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    image: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: ''
    },
    is_hot: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    cat_group: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    commission_rate: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'goods_category'
  });

  Model.associate = function() {

  }

  return Model;
};
