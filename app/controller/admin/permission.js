'use strict'

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
  async index(){
    const {ctx} = this;

    let firstData = await ctx.service.permission.firstAll();
    
    // await ctx.service.permission.secondAll();
    console.log(firstData);
  }
 









}
module.exports = PermissionController
