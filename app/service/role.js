'use strict'

const Service = require('egg').Service

class RoleService extends Service {
  /**
	 *  查询出所有的一级角色
	 *
	 * @return {*}
	 * @memberof roleService
	 */
	async firstAll() {
		const { ctx } = this
		let options = {
			attributes: ['id', 'name', 'enable','describe'],
			where: {
				pid: 0,
			},
			raw: true,
		}
		const result = await ctx.model.Role.findAll(options)
		return result
	}
	/**
	 *根据父id查询出所有的二级角色
	 *
	 * @param {*} firstData
	 * @return {*}
	 * @memberof PermissionService
	 */
	async secondAll(parentId) {
		const { ctx } = this
		let options = {
			attributes: ['id', 'name', 'enable','describe'],
			where: {
				pid: parentId,
			},
			raw: true,
		}
		const result = await ctx.model.Role.findAll(options)
		return result
	}
	/**
	 *查询所有的role
	 *
	 * @return {*}
	 * @memberof roleService
	 */
	async all() {
		const { ctx } = this
		let data = []
		const firstData = await this.firstAll()
		if (firstData) {
			for (let i = 0; i < firstData.length; i++) {
				let first = firstData[i]
				const secondData = await this.secondAll(first.id)
				data[i] = {
					first,
					secondData,
				}
			}
		}
		return data
	}
  /**
	 *根据id查询角色信息
	 *
	 * @param {*} id
	 * @return {*}
	 * @memberof PermissionService
	 */
	async one(id) {
		const { ctx } = this
		let options = {
			attributes: ['id', 'name', 'describe', 'enable'],
			where: {
				id: id,
			},
			raw: true,
		}
		const result = await ctx.model.Role.findAll(options)
		return result
	}
  /**
	 *根据id修改权限信息
	 *
	 * @param {*} data
	 * @return {*}
	 * @memberof RoleService
	 */
	async edit(id, data) {
		const { ctx } = this
		let flag = await this.exist(id)
		return await ctx.model.Role.update(
			{
				name: data.name,
				describe: data.describe,
				enable: data.enable,
			},
			{
				where: {
					id: id,
				},
			}
		)
	}
	/**
	 *根据id查询某个权限是否存在
	 *
	 * @param {*} id
	 * @return {*}
	 * @memberof RoleService
	 */
	async exist(id) {
		const { ctx } = this
		const result = await ctx.model.Role.findByPk(id)
		if (!result) {
			ctx.throw(404, '没有找到角色的id')
		}
		return result
	}
 /**
  *根据二级的id更改二级的enable
  *
  * @param {*} id
  * @param {*} enable
  * @return {*} 
  * @memberof RoleService
  */
 async updateSecondEnable(id, enable) {
		const { ctx } = this
		return await ctx.model.Role.update(
			{
				enable: enable,
			},
			{
				where: {
					pid: id,
				},
			}
		)
	}
}

module.exports = RoleService
