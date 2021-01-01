/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('spec_image', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    spec_image_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    src: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'spec_image'
  });

  Model.associate = function() {

  }

  return Model;
};
