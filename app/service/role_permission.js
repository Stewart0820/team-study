'use strict'

const Service = require('egg').Service
const BaseService = require('./base')

class RolePermissionService extends BaseService {
  constructor(Context){
    super('RolePermission',Context)
  }
	/**
   *查询所有的role_permission表中的权限
   *
   * @return {*} 
   * @memberof RolePermissionService
   */
  async all(){
    let attribute=['id', 'permission_id']
    return super.all(attribute)
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
