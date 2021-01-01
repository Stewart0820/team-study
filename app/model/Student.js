/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('Student', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    student_no: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    depart_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    major_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    classmate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    qq: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    weixin: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    status: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    tableName: 'Student'
  });

  Model.associate = function() {

  }

  return Model;
};
