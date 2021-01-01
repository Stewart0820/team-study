/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('prom_goods', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '0'
    },
    expression: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    end_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    is_end: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    group: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prom_img: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    tableName: 'prom_goods'
  });

  Model.associate = function() {

  }

  return Model;
};
