'use strict'
const { Context } = require('egg')
const Service = require('egg').Service
const crypto = require('crypto')
let modelName

class BaseService extends Service {
	constructor(modelName, Context) {
		super(Context)
		this.modelName = modelName
	}
  async all(attribute){
    const { ctx } = this
		let options = {
			attributes: attribute,
			raw: true,
		}
		return await ctx.model[this.modelName].findAll(options)
  }
	/**
   *通过pid进行查询数据
   *
   * @param {*} attribute 查询的属性
   * @param {*} pid 条件
   * @return {*} 
   * @memberof BaseService
   */
  async findByPid(attribute,pid) {
		const { ctx } = this
		let options = {
			attributes: attribute,
			where: {
				pid: pid,
			},
			raw: true,
		}
		return await ctx.model[this.modelName].findAll(options)
	}
  /**
	 *  通过id进行查询数据
	 *
	 * @param {*} attribute 属性
	 * @param {*} id 条件
	 * @return {*}
	 * @memberof BaseService
	 */
	async findById(attribute, id) {
		const { ctx } = this
		let options = {
			attributes: attribute,
			where: {
				id: id,
			},
			raw: true,
		}
		return await ctx.model[this.modelName].findAll(options)
	}
	/**
	 *查询所有的permission
	 *
	 * @return {*}
	 * @memberof PermissionService
   [
    {
      first: { id: 14, router_name: '文章管理1', enable: '0' },
      secondData: [ [Object], [Object], [Object], [Object], [Object] ]
    },
   ]             
	 */
	async twoLevelData(firstAttr, secondAttr) {
		const { ctx } = this
		let data = []
		const firstData = await this.findByPid(firstAttr,0)
		if (firstData) {
			for (let i = 0; i < firstData.length; i++) {
				let first = firstData[i]
				const secondData = await this.findByPid(
					secondAttr,
					first.id
				)
				data[i] = {
					first,
					secondData,
				}
			}
		}
		return data
	}
	
	/**
	 *根据id修改权限信息
	 *
	 * @param {*} data
	 * @return {*}
	 * @memberof PermissionService
	 */
	async edit(id, data) {
		const { ctx } = this
		return await ctx.model[this.modelName].update(
			{
				router_name: data.router_name,
				router_code: data.router_code,
				enable: data.enable,
			},
			{
				where: {
					id: id,
				},
			}
		)
	}
  /**
	 *根据二级的id更改二级的enable
	 *
	 * @param {*} id
	 * @param {*} enable
	 * @return {*}
	 * @memberof PermissionService
	 */
	async updateSecondEnable(id, enable) {
		const { ctx } = this
		return await ctx.model[this.modelName].update(
			{
				enable: enable,
			},
			{
				where: {
					pid: id,
				},
			}
		)
	}
	/**
	 *根据id查询某个权限是否存在
	 *
	 * @param {*} id
	 * @return {*}
	 * @memberof PermissionService
	 */
	async exist(id) {
		const { ctx } = this
		let options = {
			where: { id: id },
		}
		return await ctx.model[this.modelName].findAll(options)
	}
	
	/**
	 *添加一级
	 *
	 * @param {*} body
	 * @return {*}
	 * @memberof PermissionService
	 */
	async add(body) {
		const { ctx } = this
		const result = await ctx.model[this.modelName].create(body)
		return result
	}
	async delete(id) {
		const { ctx } = this
		let options = {
			where: {
				id: id,
			},
		}
		return await ctx.model[this.modelName].destroy(options)
	}
}

module.exports = BaseService
