/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('admin_log', {
    log_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    admin_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    log_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    log_ip: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    log_url: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    log_time: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'admin_log'
  });

  Model.associate = function() {

  }

  return Model;
};
