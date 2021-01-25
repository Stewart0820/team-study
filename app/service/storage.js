'use strict'

const Service = require('egg').Service

class StorageService extends Service {
 /**
  *查找所有的6商品
  *
  * @return {*} 
  * @memberof Service
  */
 async findAll() {
		const { ctx } = this
		let options = {
			attributes: [
        'id',
				'storage_name',
				'storage_origin',
				'storage_status',
				'storage_number',
				'storage_img',
				'storage_model',
				'unit',
			],
			raw: true,
		}
		const result = await ctx.model.Storage.findAll(options)
		return result
	}
  /**
   *添加商品
   *
   * @param {*} data
   * @return {*} 
   * @memberof Service
   */
  async add(data) {
		const { ctx } = this
		const result = await ctx.model.Storage.create(data)
		return result
	}
  /**
   *根据id查询是否有该商品
   *
   * @param {*} id
   * @return {*} 
   * @memberof StorageService
   */
  async one(id) {
		const { ctx } = this
		const result = await ctx.model.Storage.findByPk(id)
		if (!result) {
			ctx.throw(404, 'not found')
		}
		return result
	}
  /**
   *修改商品
   *
   * @param {*} id
   * @return {*} 
   * @memberof StorageService
   */
  async update(id,body) {
		const storage = await this.one(id)
		return await storage.update(body)
	}
  /**
   *根据id删除
   *
   * @param {*} id
   * @return {*} 
   * @memberof StorageService
   */
  async delete(id) {
		const storage = await this.one(id)
		return await storage.destroy()
	}
  /**
   *  根据id查询商品名
   *
   * @return {*} 
   * @memberof StorageService
   */
  async selectName(id) {
		const { ctx } = this
		let options = {
			attributes: [
				'storage_name',
			],
      where: {
        id: id,
      },
			raw: true,
		}
		const result = await ctx.model.Storage.findAll(options)
		return result
	}
}

module.exports = StorageService
