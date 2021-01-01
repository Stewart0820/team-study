/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('prom_order', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    money: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0.00'
    },
    expression: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    end_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_close: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    group: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'prom_order'
  });

  Model.associate = function() {

  }

  return Model;
};
