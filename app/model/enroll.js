/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('enroll', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    province: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    
    },
    city: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },

    surname: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    personal_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    id_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },

    id_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    level: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    depart: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    classinfo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    student_no: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    create_time:{
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    user:{
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
  }, {
    tableName: 'enroll'
  });

  Model.associate = function() {

  }

  return Model;
};
