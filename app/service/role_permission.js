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
}

module.exports = RolePermissionService
