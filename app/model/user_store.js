/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_store', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    store_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    true_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qq: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ''
    },
    store_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    store_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'user_store'
  });

  Model.associate = function() {

  }

  return Model;
};
