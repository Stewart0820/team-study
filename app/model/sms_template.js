/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sms_template', {
    tpl_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sms_sign: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    sms_tpl_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    tpl_content: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: ''
    },
    send_scene: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    add_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'sms_template'
  });

  Model.associate = function() {

  }

  return Model;
};
