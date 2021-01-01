'use strict'

const Service = require('egg').Service

class RolePermissionService extends Service {
  async all() {
    const { ctx } = this
    const rolepermission = await ctx.model.RolePermission.findAll()
    return rolepermission
  }

  async one(id) {
    const { ctx } = this
    const rolepermission = await ctx.model.RolePermission.findByPk(id)
    if (!rolepermission) {
      ctx.throw(404, 'not found')
    }
    return rolepermission
  }
  async add(body) {
    const { ctx } = this
    const rolepermission = await ctx.model.RolePermission.create(body)
    return rolepermission
  }
  async modify(id, body) {
    const { ctx } = this
    const rolepermission = await ctx.model.RolePermission.findByPk(id)
    console.log(role)
    return await rolepermission.update(body)
  }
  async delete(id) {
    const rolepermission = await this.one(id)
    return await rolepermission.destroy()
  }

  async createRoleIdPermissionId(body) {
    const { ctx } = this
    const rolePermission = await ctx.model.RolePermission.bulkCreate(body)
    return rolePermission
  }
  /**
   *根据role_id查询permission_id
   *
   * @param {*} id  role_id
   * @return {*} 
   * @memberof RolePermissionService
   */
  async selectPermissionId(id) {
    const { ctx } = this
    const permissionId = await ctx.model.RolePermission.findAll({
      attributes: ['permission_id'],
      where: {
        role_id: id,
      },
    })
    return permissionId
  }
  // 根据role_id查询出id
  async selectId(id) {
    const { ctx } = this
    const permissionId = await ctx.model.RolePermission.findAll({
      attributes: ['id'],
      where: {
        role_id: id,
      },
    })
    return permissionId
  }
  async deleteRoleIdPermissionId(roleId,permissionId) {
    const { ctx } = this
    await ctx.model.RolePermission.destroy({
      where: {
        role_id:roleId,
        permission_id: permissionId,
      },
    })
  }
  async deletePermissionId(roleId) {
    const { ctx } = this
    await ctx.model.RolePermission.destroy({
      where: {
        role_id:roleId,
      },
    })
  }
  async deleteRoleId(permissionId) {
    const { ctx } = this
    await ctx.model.RolePermission.destroy({
      where: {
        permission_id:permissionId,
      },
    })
  }
  
}

module.exports = RolePermissionService
