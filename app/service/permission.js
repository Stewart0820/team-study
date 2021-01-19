'use strict'

const Service = require('egg').Service

class PermissionService extends Service {
	/**
	 *
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
	async secondAll() {
		const { ctx } = this
		let options = {
			attributes: ['id', 'router_name', 'router_code', 'enable'],
			where: {
				pid: ,
			},
			raw: true,
		}
		const result = await ctx.model.Permission.findAll(options)
		return result
	}
}

module.exports = PermissionService
