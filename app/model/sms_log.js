/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sms_log', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mobile: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: ''
    },
    session_id: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: ''
    },
    add_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    msg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    scene: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    error_msg: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'sms_log'
  });

  Model.associate = function() {

  }

  return Model;
};
