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
	/**
	 *单表查询所有的数据
	 *
	 * @param {*} attribute
	 * @return {*}
	 * @memberof BaseService
	 */
	async all(attribute) {
		const { ctx } = this
		let options
		if (attribute == null) {
			options = {
				raw: true,
			}
		} else {
			options = {
				attributes: attribute,
				raw: true,
			}
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
	async findByPid(pid, attribute) {
		const { ctx } = this
		let options
		if (attribute == null) {
			options = {
				where: {
					pid: pid,
				},
				raw: true,
			}
		} else {
			options = {
				attributes: attribute,
				where: {
					pid: pid,
				},
				raw: true,
			}
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
	async findById(id, attribute) {
		const { ctx } = this
		let options
		if (attribute == null) {
			options = {
				attributes: attribute,
				where: {
					id: id,
				},
				raw: true,
			}
		} else {
			options = {
				where: {
					id: id,
				},
				raw: true,
			}
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
		const firstData = await this.findByPid(0, firstAttr)
		if (firstData) {
			for (let i = 0; i < firstData.length; i++) {
				let first = firstData[i]
				const secondData = await this.findByPid(first.id, secondAttr)
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
	async updateById(id, data) {
		const { ctx } = this
		return await ctx.model[this.modelName].update(data, {
			where: {
				id: id,
			},
		})
	}
	/**
	 *根据pid修改数据
	 *
	 * @param {*} id
	 * @param {*} data 修改的数据：必须是对象
	 * @return {*}
	 * @memberof PermissionService
	 */
	async updateByPid(id, data) {
		const { ctx } = this
		return await ctx.model[this.modelName].update(data, {
			where: {
				pid: id,
			},
		})
	}
	/**
	 *根据id查询某个id是否存在
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
	 *添加数据
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
 /**
  *根据id删除数据
  *
  * @param {*} id
  * @return {*} 
  * @memberof BaseService
  */
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
