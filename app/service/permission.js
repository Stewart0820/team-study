'use strict'
const {Context} = require('egg')

const Service = require('egg').Service
const { ERROR, SUCCESS, RESULT } = require('../util/util')
const BaseService = require('./base')
 
class PermissionService extends BaseService {
  constructor(Context){
    super('Permission',Context)
  }

  async twoLevelData(){
    let firstAttribute=['id', 'router_name', 'enable']
    let secondAttribute=['id', 'router_name', 'router_code', 'enable']
    return super.twoLevelData(firstAttribute,secondAttribute)
  }
  async findPid(id){
    let attribute=['pid']
    return super.findById(attribute,id)
  }
  async findId(id){
    let attribute=['id']
    return super.findByPid(attribute,id)
  }
}

module.exports = PermissionService
