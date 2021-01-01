/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('Studio', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    studio_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    studio_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    teacher_members: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    student_members: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    status: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    leader: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'Studio'
  });

  Model.associate = function() {

  }

  return Model;
};
