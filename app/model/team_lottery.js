/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('team_lottery', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    order_sn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    nickname: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    head_pic: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'team_lottery'
  });

  Model.associate = function() {

  }

  return Model;
};
