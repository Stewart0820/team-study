'use strict'
const { getTimeStamp, ERROR, SUCCESS, RESULT } = require('../../util/util')
const Controller = require('egg').Controller
const {INDEX,EDIT,ONE,ADD,ADDSECOND } = require('./base')

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
    let base = ctx.service.permission
    ctx.body = await INDEX(base)
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
    let base = ctx.service.permission
		ctx.body = await ONE(base,id)
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
    let result = await EDIT(base,data)
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
    let result = await ADD(base,data)
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
    const {id} =ctx.query
		let data = ctx.request.body
    let base = ctx.service.permission
    let result = await ADDSECOND(base,id,data)
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
		const pid = await ctx.service.permission.findPid(id)
		//需要删除的二级权限id
		let deleteId = []
		// 父类
		if (pid[0].pid === 0) {
			let secondId = await ctx.service.permission.secondAll(id)
			for (let i = 0; i < secondId.length; i++) {
				// 删除二级
				let flag = await ctx.service.permission.delete(secondId[i].id)
				deleteId.push(secondId[i].id)
			}
		} else {
			deleteId.push(id)
		}
		// 删除二级的role_permission删除
		let permissions = await ctx.service.rolePermission.findPermissionId()
		let ids = []
		for (let i = 0; i < permissions.length; i++) {
			let permissionId = permissions[i].permission_id
				.split(',')
				.map(Number)
			let length = permissionId.length
			for (let j = 0; j < deleteId.length; j++) {
				permissionId.remove(deleteId[j])
			}
			if (length != permissionId.length) {
				let h = getId()
				const id = permissions[i].id
				ids[h - 1] = { id, permissionId }
			}
		}
		// 更新role_permission
		for (const value of ids) {
			let permissionIds = value.permissionId.toString()
			await ctx.service.rolePermission.updatePermissionId(
				value.id,
				permissionIds
			)
		}
		let result = await ctx.service.permission.delete(id)
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
// 数组里面删除指定的元素的remove方法
Array.prototype.indexOf = function (val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i
	}
	return -1
}
Array.prototype.remove = function (val) {
	var index = this.indexOf(val)
	if (index > -1) {
		this.splice(index, 1)
	}
}
let getId = (function () {
	let i = 0
	return function () {
		return ++i
	}
})()
module.exports = PermissionController
