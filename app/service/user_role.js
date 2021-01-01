'use strict'

const Service = require('egg').Service

class UserRoleService extends Service {

  async allRoleId() {
    const { ctx } = this
    const roleId = await ctx.model.UserRole.findAll({
      attributes: ['role_id','id'],
    })
    return roleId
  }
  /**
   * 根据user_id查询role_id
   *
   * @param {*} id
   * @return {*} 
   * @memberof UserRoleService
   */
  async selectRoleId(id) {
    const { ctx } = this
    const roleId = await ctx.model.UserRole.findAll({
      attributes: ['role_id'],
      where: {
        user_id: id,
      },
    })
    return roleId
  }

  async createUserIdRoleId(userId, totalRoleId) {
    const { ctx } = this
    const rolePermission = await ctx.model.UserRole.create({
      user_id: userId,
      user_type: 3,
      role_id: totalRoleId,
    })
    return rolePermission
  }

  async updateRoleId(userId, newData) {
    const { ctx } = this
    return await ctx.model.UserRole.update({
      role_id:newData
    },{
      where: {
        user_id: userId,
      },
    });
  }
  async updateRoleIdTwo(Id, newData) {
    const { ctx } = this
    return await ctx.model.UserRole.update({
      role_id:newData
    },{
      where: {
        id: Id,
      },
    });
  }

}

module.exports = UserRoleService
