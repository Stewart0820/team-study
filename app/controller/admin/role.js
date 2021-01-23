'use strict'

const Controller = require('egg').Controller
const { RESULT } = require('../../util/util')
const {INDEX,EDIT,ONE } = require('./base')
/**
 * @controller 角色接口
 */
class RoleController extends Controller{
  
  /**
	 * @summary 查询所有的角色
	 * @description 查询所有的角色
	 * @router get /admin/role
	 * @response 200 RESULT
	 */
	async index() {
		const { ctx } = this
    ctx.body = await INDEX(ctx.service.role)
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
		ctx.body = await ONE(ctx.service.role,id)
	}
  /**
	 * @summary 修改角色
	 * @description 修改一个角色信息
	 * @router post /admin/role/edit
	 * @request body editRole
	 * @response 200 RESULT
	 */
	async edit() {
		const { ctx } = this
		let data = ctx.request.body
    let base = ctx.service.role
    let result = await EDIT(base,data)
    ctx.body = result
	}
}
module.exports = RoleController
