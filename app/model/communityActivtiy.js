/* indent size: 2 */

// 返回全局共享的变量或者方法
module.exports = app => {
    // 导入 Sequelize 包附于DataTypes
    const DataTypes = app.Sequelize;

    // 定义模型名
    // 定义community_activtiy模型
    const Model = app.model.define('communityActivtiy', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        starttime: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        endtime: {
            type: DataTypes.INTEGER(11),

        },
        status: {
            type: DataTypes.DECIMAL,
        },
        chager: {
            type: DataTypes.STRING(20),
        },
        attentment: {
            type: DataTypes.STRING(100),
        },
        c_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, {
        // 数据库的表名
        tableName: 'community_activtiy'
    });
    // community_activtiy模型结束

    // 数据库的关联
    Model.associate = function() {

        }
        // 将Model传递给app
    return Model;
};