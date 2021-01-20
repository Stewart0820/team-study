/* indent size: 2 */

module.exports = (app) => {
  const DataTypes = app.Sequelize

  const Model = app.model.define(
    'role_permission',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      role_id: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      permission_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
    },
    {
      tableName: 'role_permission',
    }
  )

  Model.associate = function () {}

  return Model
}
