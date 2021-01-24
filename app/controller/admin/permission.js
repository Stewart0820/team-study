'use strict'
const { getTimeStamp, ERROR, SUCCESS, RESULT } = require('../../util/util')
const Controller = require('egg').Controller
const { EDIT, ADD, ADDSECOND,DELETEUP } = require('./base')

/**
 * @controller 权限接口
 */
class PermissionController extends Controller {
	/**
	 * @summary 查询所有的权限
	 * @description 查询所有的权限
	 * @router get /admin/permission
	 * @response 200 RESULT
	 */
	async index() {
		const { ctx } = this
		ctx.body = await ctx.service.permission.twoLevelData()
	}
	/**
	 * @summary 查询一个权限
	 * @description 根据id查询权限信息
	 * @router get /admin/permission/one
	 * @request query  id
	 * @response 200 RESULT
	 */
	async one() {
		const { ctx } = this
		const { id } = ctx.query
		ctx.body = await ctx.service.permission.one(id)
	}
	/**
	 * @summary 修改权限
	 * @description 修改一个权限信息
	 * @router post /admin/permission/edit
	 * @request body editPermission
	 * @response 200 RESULT
	 */
	async edit() {
		const { ctx } = this
		let data = ctx.request.body
		let base = ctx.service.permission
		let result = await EDIT(base, data)
		ctx.body = result
	}
	/**
	 * @summary 添加一级权限
	 * @description 添加一级权限信息
	 * @router post /admin/permission/addFirst
	 * @request body addFirstPermission
	 * @response 200 RESULT
	 */
	async addFirst() {
		const { ctx } = this
		let data = ctx.request.body
		let base = ctx.service.permission
		let result = await ADD(base, data)
		ctx.body = result
	}
	/**
	 * @summary 添加二级权限
	 * @description 添加二级权限信息
	 * @router post /admin/permission/addSecond
	 * @request number id  一级权限的id
	 * @request body addSecondPermission   二级权限的数据
	 * @response 200 RESULT
	 */
	async addSecond() {
		const { ctx } = this
		const { id } = ctx.query
		let data = ctx.request.body
		let base = ctx.service.permission
		let result = await ADDSECOND(base, id, data)
		ctx.body = result
	}
	/**
	 * @summary 删除权限
	 * @description 删除一个权限信息
	 * @router get /admin/permission/delete
	 * @request query integer id 权限id
	 * @response 200 RESULT
	 */
	async delete() {
		const { ctx } = this
		const { id } = ctx.query
    let base = ctx.service.permission
    let upBase =ctx.service.rolePermission
		const exist = await base.exist(id)
		if (exist.length === 0) {
			RESULT.code = 0
			RESULT.msg = '该权限不存在'
			ctx.body = RESULT
			return 
		}
    await DELETEUP(base,upBase,id,'permission_id')

    let result = await base.delete(id)
		if (result) {
			RESULT.code = 1
			RESULT.msg = '删除成功'
			RESULT.status = 200
		} else {
			RESULT.code = 0
			RESULT.msg = '删除失败'
		}
		ctx.body = RESULT
	}
}


module.exports = PermissionController
