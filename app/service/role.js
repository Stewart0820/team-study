'use strict'

const Service = require('egg').Service

class RoleService extends Service {
  async all() {
    const { ctx } = this
    const roles = await ctx.model.Role.findAll()
    return roles
  }

  async one(id) {
    const { ctx } = this
    const role = await ctx.model.Role.findByPk(id)
    if (!role) {
      ctx.throw(404, 'not found')
    }
    return role
  }
  async add(body) {
    const { ctx } = this
    const role = await ctx.model.Role.create(body)
    return role
  }
  async modify(id, body) {
    const { ctx } = this
    const role = await ctx.model.Role.findByPk(id)
    return await role.update(body)
  }
  async delete(id) {
    const role = await this.one(id)
    return await role.destroy()
  }

  // 查询出Role的一级名称
  async firstAll() {
    const { ctx } = this
    const roleFirstNames = await ctx.model.Role.findAll({
      attributes: ['name', 'enable', 'describe', 'id'],
      where: {
        pid: 0,
      },
    })
    return roleFirstNames
  }

  // 添加二级角色
  async addSecondData(data) {
    const { ctx } = this
    const role = await ctx.model.Role.create({
      name: data.name,
      describe: data.describe,
      pid: data.pid,
      enable: data.enable,
    })
    return role
  }
  // 查询出role的一级名称id
  async firstIdAll() {
    const { ctx } = this
    const roleFirstIds = await ctx.model.Role.findAll({
      attributes: ['id'],
      where: {
        pid: 0,
      },
    })
    return roleFirstIds
  }

  // 查询出role的二级id,名称,code
  async secondAll(variableId) {
    const { ctx } = this
    const roleSecondNames = await ctx.model.Role.findAll({
      attributes: ['id', 'name', 'enable', 'describe'],
      where: {
        pid: variableId,
      },
    })
    return roleSecondNames
  }

  async updateSecondEnableFalse(secondId) {
    const { ctx } = this

    return await ctx.model.Role.update(
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
    return await ctx.model.Role.update(
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
}

module.exports = RoleService
