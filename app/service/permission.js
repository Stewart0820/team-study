'use strict'

const Service = require('egg').Service
const { ERROR, SUCCESS, RESULT } = require('../util/util')

class PermissionService extends Service {
	/**
	 *  查询出所有的一级权限
	 *
	 * @return {*}
	 * @memberof PermissionService
	 */
	async firstAll() {
		const { ctx } = this
		let options = {
			attributes: ['id', 'router_name', 'enable'],
			where: {
				pid: 0,
			},
			raw: true,
		}
		const result = await ctx.model.Permission.findAll(options)
		return result
	}
	/**
	 *根据父id查询出所有的二级权限
	 *
	 * @param {*} firstData
	 * @return {*}
	 * @memberof PermissionService
	 */
	async secondAll(parentId) {
		const { ctx } = this
		let options = {
			attributes: ['id', 'router_name', 'router_code', 'enable'],
			where: {
				pid: parentId,
			},
			raw: true,
		}
		const result = await ctx.model.Permission.findAll(options)
		return result
	}
	/**
	 *查询所有的permission
	 *
	 * @return {*}
	 * @memberof PermissionService
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
	 *根据id查询权限信息
	 *
	 * @param {*} id
	 * @return {*}
	 * @memberof PermissionService
	 */
	async one(id) {
		const { ctx } = this
		let options = {
			attributes: ['id', 'router_name', 'router_code', 'enable','pid'],
			where: {
				id: id,
			},
			raw: true,
		}
		const result = await ctx.model.Permission.findAll(options)
		return result
	}
  /**
	 *根据id查询pid
	 *
	 * @param {*} id
	 * @return {*}
	 * @memberof PermissionService
	 */
	async findPid(id) {
		const { ctx } = this
		let options = {
			attributes: ['pid'],
			where: {
				id: id,
			},
			raw: true,
		}
		const result = await ctx.model.Permission.findAll(options)
		return result
	}
	/**
	 *根据id修改权限信息
	 *
	 * @param {*} data
	 * @return {*}
	 * @memberof PermissionService
	 */
	async edit(id, data) {
		const { ctx } = this
		let flag = await this.exist(id)
		return await ctx.model.Permission.update(
			{
				router_name: data.router_name,
				router_code: data.router_code,
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
	 * @memberof PermissionService
	 */
	async exist(id) {
		const { ctx } = this
		const result = await ctx.model.Permission.findByPk(id)
		if (!result) {
			ctx.throw(404, '没有找到权限的id')
		}
		return result
	}
 /**
  *根据二级的id更改二级的enable
  *
  * @param {*} id
  * @param {*} enable
  * @return {*} 
  * @memberof PermissionService
  */
 async updateSecondEnable(id, enable) {
		const { ctx } = this
		return await ctx.model.Permission.update(
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
  /**
   *添加一级
   *
   * @param {*} body
   * @return {*} 
   * @memberof PermissionService
   */
  async add(body) {
    const { ctx } = this
    const result = await ctx.model.Permission.create(body)
    return result
  }
  async delete(id) {
    const permission = await this.exist(id)
    return await permission.destroy()
  }
  
}

module.exports = PermissionService
