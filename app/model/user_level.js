/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('user_level', {
    level_id: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    level_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    discount: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    describe: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'user_level'
  });

  Model.associate = function() {

  }

  return Model;
};
