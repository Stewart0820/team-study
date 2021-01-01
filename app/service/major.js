'use strict'

const Service = require('egg').Service

class MajorService extends Service {
	async all() {
		const { ctx } = this
		const majors = await ctx.model.Major.findAll()
		return majors
	}
	/**
	 * 查询专业列表通过部门编号
	 * @param {*} depart_id 部门编号
	 */
	async findMajorsByDepartId(depart_id) {
		const { ctx } = this
		let options = {
			attributes: ['id', 'major_name'],
			where: {
				depart_id: depart_id,
			},
		}
		const majors = await ctx.model.Major.findAll(options)
		return majors
	}
	async one(id) {
		const { ctx } = this
		const major = await ctx.model.Major.findByPk(id)
		if (!major) {
			ctx.throw(404, 'not found')
		}
		return major
	}
	async add(body) {
		const { ctx } = this
		const major = await ctx.model.Major.create(body)
		return major
	}
	async modify(id, body) {
		const major = await this.one(id)
		return await major.update(body)
	}
	async delete(id) {
		const major = await this.one(id)
		return await major.destroy()
	}
	/**
	 *根据departId查询major的id和name
	 *
	 * @param {*} departId
	 * @return {*}
	 * @memberof MajorService
	 */
	async findMajorNameId(departId) {
		const { ctx } = this
		const result = await ctx.model.Major.findAll({
			attributes: ['id', 'major_name'],
			where: {
				depart_id: departId,
			},
		})
		return result
	}
}

module.exports = MajorService
