/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('Competition', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    competition_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    competition_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    competition_object: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    competition_period: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    competition_url: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    competition_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    competition_org: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    status: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    competition_logo: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    tableName: 'Competition'
  });

  Model.associate = function() {

  }

  return Model;
};
