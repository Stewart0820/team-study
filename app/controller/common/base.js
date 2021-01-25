'use strict'
const { getTimeStamp, ERROR, SUCCESS, RESULT } = require('../../util/util')
const Controller = require('egg').Controller

let serviceName

class CommonController extends Controller {
	constructor(serviceName, Context) {
		super(Context)
		this.serviceName = serviceName
	}
 /**
  * 单表查询所有的数据
  *
  * @memberof CommonController
  */
 async index() {
		const { ctx } = this
		ctx.body = await ctx.service[this.serviceName].all()
	}
	/**
   *查询二级所有数据
    根据父节点的id去和子节点的pid匹配进行查询
   *[
      {
        "first": {
          "id": 14,
          "router_name": "文章管理1",
          "enable": "0"
        },
        "secondData": [
          {
            "id": 1,
            "router_name": "article主页",
            "router_code": "/admin/article",
            "enable": "1"
          },
        ]
      }
    ]  
   * @memberof CommonController
   */
	async twoLevelData() {
		const { ctx } = this
		ctx.body = await ctx.service[this.serviceName].twoLevelData()
	}
	/**
	 * 根据传入的id查询某条数据
	 *
	 * @memberof CommonController
	 */
	async one() {
		const { ctx } = this
		const { id } = ctx.query
    let exist = await ctx.service[this.serviceName].exist(id)
		if (exist.length === 0) {
			RESULT.code = 0
			RESULT.msg = '该id不存在'
			ctx.body = RESULT
			return
		}
		ctx.body = await ctx.service[this.serviceName].findById(id)
	}
	/**
   * 1：修改父类 
     2：有子类的时候，
     3：子类有enable的时候
   *
   * @memberof CommonController
   */
	async editOneLever() {
		const { ctx } = this
		let data = ctx.request.body
		const { id } = ctx.query
		let exist = await ctx.service[this.serviceName].exist(id)
		if (exist.length === 0) {
			RESULT.code = 0
			RESULT.msg = '该id不存在'
			ctx.body = RESULT
			return
		}
		let result = await ctx.service[this.serviceName].findById(id)
		let flagOne = await ctx.service[this.serviceName].updateById(id, data)
		if (flagOne) {
			RESULT.code = 1
			RESULT.msg = '修改成功'
			RESULT.status = 200
		} else {
			RESULT.code = 0
			RESULT.msg = '修改失败'
		}
    const enable = {
      enable:data.enable,
    }
		if (result[0].pid == 0) {
			let flagTwo = await ctx.service[this.serviceName].updateByPid(
				id,
				enable
			)
			if (flagTwo) {
				RESULT.code = 1
				RESULT.msg = '修改成功'
				RESULT.status = 200
			} else {
				RESULT.code = 0
				RESULT.msg = '修改失败'
			}
		}
		ctx.body = RESULT
	}
	/**
	 *添加
	 *
	 * @memberof CommonController
	 */
	async add(addData) {
		const { ctx } = this
		let data = ctx.request.body
		let result = await ctx.service[this.serviceName].add(data)
		if (result) {
			RESULT.code = 1
			RESULT.msg = '创建成功'
			RESULT.status = 200
		} else {
			RESULT.code = 0
			RESULT.msg = '创建失败'
		}
		ctx.body = RESULT
	}
	/**
   *添加二级数据
   * 1：pid对应父类的id
     2：需要传入父类的id
     3：传入添加的数据
   * @memberof CommonController
   */
	async addSecond() {
		const { ctx } = this
		const { id } = ctx.query
		let data = ctx.request.body
    // 判断id是否存在
    let exist = await ctx.service[this.serviceName].exist(id)
		if (exist.length === 0) {
			RESULT.code = 0
			RESULT.msg = '该id不存在'
			ctx.body = RESULT
			return
		}
		data.pid = id
		let result = await ctx.service[this.serviceName].add(data)
		if (result) {
			RESULT.code = 1
			RESULT.msg = '创建成功'
			RESULT.status = 200
		} else {
			RESULT.code = 0
			RESULT.msg = '创建失败'
		}
		ctx.body = RESULT
	}
	/**
	 *根据传入的id进行删除对应的数据
	 *
	 * @memberof CommonController
	 */
	async delete() {
		const { ctx } = this
		const { id } = ctx.query
    let exist = await ctx.service[this.serviceName].exist(id)
		if (exist.length === 0) {
			RESULT.code = 0
			RESULT.msg = '该id不存在'
			ctx.body = RESULT
			return
		}
		let result = await ctx.service[this.serviceName].delete(id)
		if (result) {
			RESULT.code = 1
			RESULT.msg = '删除成功'
			RESULT.status = 200
		} else {
			RESULT.code = 0
			RESULT.msg = '删除失败'
		}
		ctx.body = RESULT
	}
	/**
  *根据传入的id修改数据
  1：传入对应的id
  2：传入需要修改的数据
  *
  * @memberof CommonController
  */
	async edit() {
		const { ctx } = this
		let data = ctx.request.body
		let { id } = ctx.query
		let result = await ctx.service[this.serviceName].updateById(id, data)
		if (result) {
			RESULT.code = 1
			RESULT.msg = '修改成功'
			RESULT.status = 200
		} else {
			RESULT.code = 0
			RESULT.msg = '修改失败'
		}
		ctx.body = RESULT
	}
}

module.exports = CommonController
