'use strict'
const { getTimeStamp, ERROR, SUCCESS } = require('../../util/util')
const Controller = require('egg').Controller

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
		let data = await ctx.service.permission.all()
		ctx.body = data
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
		let data = await ctx.service.permission.one(id)
		ctx.body = data
	}
	/**
	 * @summary 修改权限
	 * @description 修改一个权限信息
	 * @router post /admin/permission/edit
	 * @request body editFirstPermission
	 * @response 200 RESULT
	 */
	async edit() {
		const { ctx } = this
		let data = ctx.request.body

		const id = data.id
		const enable = data.enable

		let flagOne = await ctx.service.permission.edit(id, data)
		let flagTwo = await ctx.service.permission.updateSecondEnable(
			id,
			enable
		)

		if (flagOne && flagTwo) {
			SUCCESS.msg = '修改成功'
			ctx.body = SUCCESS
		} else {
			ctx.body = ERROR
		}
	}
	/**
	 * @summary 添加权限
	 * @description 添加一个权限信息
	 * @router post /admin/permission/add
	 * @request body addPermission
	 * @response 200 RESULT
	 */
	async add() {
		const { ctx } = this
		let data = ctx.request.body
		console.log(data)
		let result = await ctx.service.permission.add(data)
		if (result) {
			SUCCESS.msg = '添加成功'
			ctx.body = SUCCESS
		} else {
			ctx.body = ERROR
		}
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
		await ctx.service.permission.delete(id)
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
