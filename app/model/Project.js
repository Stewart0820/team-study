/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('Project', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    teachers: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teacher_joined: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue:0
    },
    teacher_max: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    project_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    students: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    student_joined: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue:0
    },
    student_max: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    project_period: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    start_time: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    project_rate: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue:0
    },
    enroll: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue:0
    },
    status: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    project_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    update_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    leader: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    leader_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },

  }, {
    tableName: 'Project'
  });

  Model.associate = function() {

  }

  return Model;
};
