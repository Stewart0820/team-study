/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('storage', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    storage_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    storage_origin: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    storage_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    storage_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    storage_img: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    storage_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    storage_model: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    unit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    pid: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: '0'
    },
    create_user_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    create_time: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    update_user_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    update_time: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'storage'
  });

  Model.associate = function() {

  }

  return Model;
};
