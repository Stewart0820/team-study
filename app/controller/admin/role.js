'use strict'

const Controller = require('egg').Controller
const { RESULT } = require('../../util/util')
const BaseController = require('../common/base')
const { Context } = require('egg')

/**
 * @controller 角色接口
 */
class RoleController extends BaseController{
  constructor(Context) {
		super('role', Context)
	}
  
  /**
	 * @summary 查询所有的角色
	 * @description 查询所有的角色
	 * @router get /admin/role
	 * @response 200 RESULT
	 */
	async index() {
		return super.twoLevelData()
  }
/**
	 * @summary 查询一个角色
	 * @description 根据id查询角色信息
	 * @router get /admin/role/one
	 * @request query  id
	 * @response 200 RESULT
	 */
	async one() {
		return super.one()
	}
  /**
	 * @summary 修改角色
	 * @description 修改一个角色信息
	 * @router post /admin/role/edit
   * @request query integer id 角色id
	 * @request body role
	 * @response 200 RESULT
	 */
	async edit() {
		return super.editOneLever()
	}
}
module.exports = RoleController
