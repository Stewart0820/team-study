/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('goods_activity', {
    act_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    act_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    act_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    act_type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    goods_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    spec_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    goods_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    start_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    end_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    is_finished: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ext_info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    act_count: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'goods_activity'
  });

  Model.associate = function() {

  }

  return Model;
};
