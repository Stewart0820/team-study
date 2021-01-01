/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('system_module', {
    mod_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    module: {
      type: DataTypes.ENUM('top','menu','module'),
      allowNull: true,
      defaultValue: 'module'
    },
    level: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '3'
    },
    ctl: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    act: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ''
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    visible: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    parent_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '0'
    },
    orderby: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '50'
    },
    icon: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'system_module'
  });

  Model.associate = function() {

  }

  return Model;
};
