'use strict'

const Service = require('egg').Service

class RolePermissionService extends Service {
	/**
	 *  查询所有的role_permission表中的权限
	 *
	 * @memberof RolePermissionService
	 */
	async findPermissionId() {
		const { ctx } = this
		return await ctx.model.RolePermission.findAll({
			attributes: ['id', 'permission_id'],
			raw: true,
		})
	}
	/**
	 *根据id更新permissionId
	 *
	 * @param {*} id
	 * @param {*} permissionIds
	 * @return {*}
	 * @memberof RolePermissionService
	 */
	async updatePermissionId(id, permissionIds) {
		const { ctx } = this
		return await ctx.model.RolePermission.update(
			{
				permission_id: permissionIds,
			},
			{
				where: {
					id: id,
				},
			}
		)
	}
}

module.exports = RolePermissionService
