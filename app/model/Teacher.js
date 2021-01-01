/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('Teacher', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    teacher_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    teacher_no: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    depart_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    weixin: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    qq: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    in_school: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    professional: {
      type: DataTypes.STRING(32),
      allowNull: true
   
    },
    status: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 1
    },
    teacher_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'Teacher'
  });

  Model.associate = function() {

  }

  return Model;
};
