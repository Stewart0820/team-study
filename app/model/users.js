/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('users', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
   
    sex: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    birthday: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    income: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    points: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    depart_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    classinfo_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    major_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    teacher_no: {
      type: DataTypes.STRING(20),
      allowNull: true,
  
    },
    student_no: {
      type: DataTypes.STRING(20),
      allowNull: true,
  
    },
    professional: {
      type: DataTypes.STRING(20),
      allowNull: true,
  
    },
    address_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    reg_time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    last_login: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    last_ip: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ''
    },
    qq: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ''
    },
    mobile_validated: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
   
    head_pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    province: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '0'
    },
    city: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '0'
    },
    district: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '0'
    },
    email_validated: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    level: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
   
    is_lock: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
   
    token: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: ''
    },
    message_mask: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '63'
    },
    // push_id: {
    //   type: DataTypes.STRING(30),
    //   allowNull: true,
    //   defaultValue: ''
    // }
  }, {
    tableName: 'users'
  });

  Model.associate = function() {

  }

  return Model;
};
