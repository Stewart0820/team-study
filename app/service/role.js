'use strict'

const Service = require('egg').Service
const {Context} = require('egg')
const BaseService = require('./base')

class RoleService extends BaseService {
  constructor(Context){
    super('Role',Context)
  }
}

module.exports = RoleService
