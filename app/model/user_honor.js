/* indent size: 2 */

module.exports = (app) => {
	const DataTypes = app.Sequelize

	const Model = app.model.define(
		'user_extend',
		{
			id: {
				type: DataTypes.INTEGER(11).UNSIGNED,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			honor_name: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},

			honor_type: {
				type: DataTypes.BIGINT(20),
				allowNull: true,
			},
			honor_path: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			honor_date: {
				type: DataTypes.INTEGER(20),
				allowNull: true,
			},
      honor_no: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			level: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			create_time: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
			},
			student_id: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
			},
			depart_id: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
			},
			major_id: {
				type: DataTypes.INTEGER(11),
				allowNull: true,
			},
			teachers_id: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
		},
		{
			tableName: 'user_honor',
		}
	)

	Model.associate = function () {}

	return Model
}
