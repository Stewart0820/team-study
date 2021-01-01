/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('ad', {
    ad_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    media_type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ad_name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    ad_link: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    ad_code: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    start_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    end_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    link_man: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    link_email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    link_phone: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ''
    },
    click_count: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    enabled: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    orderby: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '50'
    },
    target: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    bgcolor: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'ad'
  });

  Model.associate = function() {

  }

  return Model;
};
