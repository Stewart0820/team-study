/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('ad_position', {
    position_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    position_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    ad_width: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ad_height: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    position_desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    position_style: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_open: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'ad_position'
  });

  Model.associate = function() {

  }

  return Model;
};
