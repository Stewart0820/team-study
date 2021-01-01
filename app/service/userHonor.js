'use strict'
const Service = require('egg').Service

class UserHonorService extends Service {
	async add(body) {
		const { ctx } = this
		let result = await ctx.model.UserHonor.create(body)
		return result
	}
}

module.exports = UserHonorService
