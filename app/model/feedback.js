/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('feedback', {
    msg_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    parent_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    msg_title: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    msg_type: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    msg_status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    msg_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    msg_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    message_img: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    order_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    msg_area: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'feedback'
  });

  Model.associate = function() {

  }

  return Model;
};
