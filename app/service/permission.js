'use strict'

const Service = require('egg').Service

class PermissionService extends Service {
  async all() {
    const { ctx } = this
    const permissions = await ctx.model.Permission.findAll()
    return permissions
  }

  async one(id) {
    const { ctx } = this
    const permission = await ctx.model.Permission.findByPk(id)
    if (!permission) {
      ctx.throw(404, 'not found')
    }
    return permission
  }
  async add(body) {
    const { ctx } = this
    const permission = await ctx.model.Permission.create(body)
    return permission
  }

  async modify(id, body) {
    const permission = await this.one(id)
    return await permission.update(body)
  }
  async delete(id) {
    const permission = await this.one(id)
    return await permission.destroy()
  }
  // 查询出permission的一级名称
  async firstAll() {
    const { ctx } = this
    const permissionFirstNames = await ctx.model.Permission.findAll({
      attributes: ['router_name', 'enable', 'id'],
      where: {
        pid: 0,
      },
    })
    return permissionFirstNames
  }

  // 查询出permission的一级名称id
  async firstIdAll() {
    const { ctx } = this
    const permissionFirstIds = await ctx.model.Permission.findAll({
      attributes: ['id'],
      where: {
        pid: 0,
      },
    })
    return permissionFirstIds
  }

  // 查询出permission的二级id,名称,code
  async secondAll(variableId) {
    const { ctx } = this
    const permissionSecondNames = await ctx.model.Permission.findAll({
      attributes: ['id', 'router_name', 'router_code','enable'],
      where: {
        pid: variableId,
      },
    })
    return permissionSecondNames
  }
  

  // 根据role_permission表的permission_id查询
  async findPermissionRouterName(rolePermissionIds) {
    const { ctx } = this
    const permissionRouterNames = await ctx.model.Permission.findAll({
      attributes: ['router_name','id'],
      where: {
        pid: rolePermissionIds,
      },
    })
    return permissionRouterNames
  }
  // 根据role_permission表的permission_id查询
  // async findPermissionRouterName(rolePermissionIds) {
  //   const { ctx } = this
  //   const permissionRouterNames = await ctx.model.Permission.findAll({
  //     attributes: [],
  //     where: {
  //       pid: rolePermissionIds,
  //     },
  //   })
  //   return permissionRouterNames
  // }

  // 添加二级权限
  async addSecondData(data) {
    const { ctx } = this
    const permission = await ctx.model.Permission.create({
      router_name: data.routerName,
      router_code: data.routerCode,
      pid: data.pid,
      enable: data.enable,
    })
    return permission
  }
  async updateSecondEnableFalse(secondId) {
    const { ctx } = this

    return await ctx.model.Permission.update(
      { enable: 0 },
      {
        where: {
          id: secondId,
        },
      }
    )
  }

  async updateSecondEnableTrue(secondId) {
    const { ctx } = this
    return await ctx.model.Permission.update(
      {
        enable: 1,
      },
      {
        where: {
          id: secondId,
        },
      }
    )
  }
  /**
   * 根据permission 的id查询router_code
   *
   * @param {*} id
   * @return {*} 
   * @memberof PermissionService
   */
  async selectPermissionRouter(id) {
    const { ctx } = this
    const result = await ctx.model.Permission.findAll({
      attributes: ['router_code','router_name','pid'],
      where: {
        id: id,
      },
    })
    return result
  }

  async selectFirstIdName(id) {
    const { ctx } = this
    const result = await ctx.model.Permission.findAll({
      attributes: ['id','router_name'],
      where: {
        id: id,
      },
    })
    return result
  }
  async selectSecondPid(id) {
    const { ctx } = this
    const result = await ctx.model.Permission.findAll({
      attributes: ['pid'],
      where: {
        id: id,
      },
    })
    return result
  }
}

module.exports = PermissionService
