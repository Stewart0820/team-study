'use strict'
const {Context} = require('egg')

const Service = require('egg').Service
const { ERROR, SUCCESS, RESULT } = require('../util/util')
const BaseService = require('./base')
 
class PermissionService extends BaseService {
  constructor(Context){
    super('Permission',Context)
  }
  /**
   * 二级查询需要的字段
   *
   * @return {*} 
   * @memberof PermissionService
   */
  async twoLevelData(){
    let firstAttribute=['id', 'router_name', 'enable']
    let secondAttribute=['id', 'router_name', 'router_code', 'enable']
    return super.twoLevelData(firstAttribute,secondAttribute)
  }
  /**
   *根据id查询pid
   *
   * @param {*} id
   * @return {*} 
   * @memberof PermissionService
   */
  async findPid(id){
    let attribute=['pid']
    return super.findById(id,attribute)
  }
  /**
   *根据pid查询id
   *
   * @param {*} id
   * @return {*} 
   * @memberof PermissionService
   */
  async findId(id){
    let attribute=['id']
    return super.findByPid(id,attribute)
  }
}

module.exports = PermissionService
