/* indent size: 2 */

module.exports = app => {
    const DataTypes = app.Sequelize;
  
    const Model = app.model.define('enroll_project', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
       
      },
      project_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      is_enroll_project: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      agree: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      user_type: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      create_time: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
     
    }, {
      tableName: 'enroll_project'
    });
  
    Model.associate = function() {
  
    }
  
    return Model;
  };
  