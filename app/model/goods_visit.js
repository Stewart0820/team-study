/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('goods_visit', {
    visit_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    visittime: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    extend_cat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'goods_visit'
  });

  Model.associate = function() {

  }

  return Model;
};
