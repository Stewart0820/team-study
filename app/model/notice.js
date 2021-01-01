module.exports = app => {
    const DataTypes = app.Sequelize;
    const Model = app.model.define('notice', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      create_time: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      update_time: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      teacher_no: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      teacher_name: {
        type: DataTypes.TEXT,
        allowNull: true
      },

    }, 
    {
      tableName: 'notice'
    });
  
    Model.associate = function() {
  
    }
  
    return Model;
  };