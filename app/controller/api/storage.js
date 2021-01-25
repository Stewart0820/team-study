'use strict'

const Controller = require('egg').Controller
const {getTimeStamp,ERROR,SUCCESS} =require('../../util/util');

/**
 * @controller 商品管理接口
 */
class StorageController extends Controller {
	/**
	 * @summary 获取商品列表
	 * @description 获取商品列表
	 * @router get /api/storage/findAll
	 * @response 200
	 */
	async findAll() {
		const { ctx } = this
		let data = await ctx.service.storage.findAll()
		if (data) {
			ctx.body = data
		} else {
			ERROR.msg = '没有商品数据'
			ctx.body=ERROR
		}
	}
	/**
	 * @summary 添加商品数据
	 * @description 添加商品数据
	 * @router post /api/storage/add
	 * @request body add_storage
	 * @response 200
	 */
	async add() {
		const { ctx } = this
		let storage = ctx.request.body
    storage.create_time=getTimeStamp()
    storage.create_user_id = storage.user_id
		let storageData = await ctx.service.storage.add(storage)

    // 添加商品记录
    let record={}
    record.storage_id=storageData.id
    record.add_time = getTimeStamp()
    record.add_number=storage.storage_number
    record.user_id=storage.user_id
    record.create_user_id = storage.user_id
    record.create_time = getTimeStamp()
    record.storage_name = storageData.storage_name
		let recordData = await ctx.service.storageRecord.add(record)

		if (storageData&&recordData) {
			ctx.body=SUCCESS
		} else {
			ERROR.msg = '添加商品失败'
			ctx.body=ERROR
		}
    
	}

  /**
	 * @summary 修改商品数据
	 * @description 修改商品数据
	 * @router post /api/storage/update
	 * @request body update_storage
	 * @response 200
	 */
	async update() {
		const { ctx } = this
		let storage = ctx.request.body
    storage.update_user_id = storage.user_id
    storage.update_time = getTimeStamp()
		let data = await ctx.service.storage.update(storage.id,storage)
		if (data) {
			ctx.body=SUCCESS
		} else {
			ERROR.msg = '修改商品失败'
			ctx.body=ERROR
		}
	}
  /**
	 * @summary 删除商品
	 * @description 删除商品
	 * @router get /api/storage/delete
	 * @request query integer id 商品的编号
	 * @response 200
	 */
	async delete() {
		const { ctx } = this
		let {id} = ctx.query
    if (!id) {
      ERROR.msg = '没有传入删除的id'
			ctx.body=ERROR
    }
    console.log(id);
		let data = await ctx.service.storage.delete(id)
		if (data) {
			ctx.body=SUCCESS
		} else {
			ERROR.msg = '删除商品失败'
			ctx.body=ERROR
		}
	}
}

module.exports = StorageController
