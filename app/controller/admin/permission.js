'use strict'
const { getTimeStamp, ERROR, SUCCESS, RESULT } = require('../../util/util')
const Controller = require('egg').Controller
const { DELETEUP } = require('../common/common')
const BaseController = require('../common/base')
const { Context } = require('egg')

/**
 * @controller 权限接口
 */
class PermissionController extends BaseController {
	constructor(Context) {
		super('permission', Context)
	}
	/**
	 * @summary 查询所有的权限
	 * @description 查询所有的权限
	 * @router get /admin/permission
	 * @response 200 RESULT
	 */
	async index() {
		return super.twoLevelData()
	}
	/**
	 * @summary 查询一个权限
	 * @description 根据id查询权限信息
	 * @router get /admin/permission/one
	 * @request query  id
	 * @response 200 RESULT
	 */
	async one() {
		return super.one()
	}
	/**
	 * @summary 修改权限
	 * @description 修改一个权限信息
	 * @router post /admin/permission/edit
	 * @request query integer id 权限id
	 * @request body permission
	 * @response 200 RESULT
	 */
	async edit() {
		return super.editOneLever()
	}
	/**
	 * @summary 添加一级权限
	 * @description 添加一级权限信息
	 * @router post /admin/permission/add
	 * @request body permission
	 * @response 200 RESULT
	 */
	async add() {
		return super.add()
	}
	/**
	 * @summary 添加二级权限
	 * @description 添加二级权限信息
	 * @router post /admin/permission/addSecond
	 * @request query integer id  一级权限的id
	 * @request body permission   二级权限的数据
	 * @response 200 RESULT
	 */
	async addSecond() {
		return super.addSecond()
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
  /**
	 * @summary 修改测试
	 * @description 修
	 * @router post /admin/permission/editText
	 * @request query integer id 权限id
	 * @request body permission
	 * @response 200 RESULT
	 */
	async editText() {
		return super.edit()
	}
}

module.exports = PermissionController
