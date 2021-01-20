'use strict'

const Controller = require('egg').Controller

/**
 * @controller 角色接口
 */
class RoleController extends Controller {
  /**
	 * @summary 查询所有的角色
	 * @description 查询所有的角色
	 * @router get /admin/role
	 * @response 200 RESULT
	 */
	async index() {
		const { ctx } = this
		let data = await ctx.service.role.all()
		ctx.body = data
	}
/**
	 * @summary 查询一个角色
	 * @description 根据id查询角色信息
	 * @router get /admin/role/one
	 * @request query  id
	 * @response 200 RESULT
	 */
	async one() {
		const { ctx } = this
		const { id } = ctx.query
		let data = await ctx.service.role.one(id)
		ctx.body = data
	}

}
module.exports = RoleController
