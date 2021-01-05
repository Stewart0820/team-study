'use strict'

const Controller = require('egg').Controller
const { ERROR, SUCCESS, getTimeStamp } = require('../../util/util')
const crypto = require('crypto')
/**
 * @controller 用户接口
 */
class UserController extends Controller {
  /**
	 * @summary 用户登录
	 * @description 用户登录
	 * @router post /api/user/login
	 * @request body user_login
	 * @response 200 RESULT
	 */
	async login() {
		const { ctx,app } = this
		let { email, password } = ctx.request.body

    let salt = app.config.salt
		password = crypto
			.createHmac('sha256', salt)
			.update(password)
			.digest('hex')
		const sqlPassword = await ctx.service.users.selectPassword(email)
    if (sqlPassword==null&&sqlPassword[0].dataValues.password != password) {
			ERROR.msg = '密码错误'
      ctx.body = ERROR
      return
		} else {
      console.log("--------");
    }
		
	}
	/**
	 * @summary 用户注册
	 * @description 用户注册
	 * @router post /api/user/reg
	 * @request body user_reg
	 * @response 200 RESULT
	 */
	async reg() {
		const { ctx, app } = this
		let { email, password, repassword,code } = ctx.request.body
		const validateResult = await ctx.validate('user.reg', {
			email,
			password,
			repassword,
		}) // 第一个参数对应于rules目录下目录或文件
		if (!validateResult) {
			return
		}
		let useremail = await ctx.service.users.findUserByEmail(email)
		if (useremail) {
			ERROR.msg = '电子邮件重复，不可用'
			ctx.body = ERROR
			return
		}
    if (ctx.session.code!=code) {
      ERROR.msg = '填入的验证码错误'
			ctx.body = ERROR
			return
    }

		let salt = app.config.salt
    // 密码加密
		password = crypto
			.createHmac('sha256', salt)
			.update(password)
			.digest('hex')
		let user = {}
		user.email = email
		user.password = password
		user.reg_time = getTimeStamp()
		user.last_login = getTimeStamp()
		user.last_ip = ctx.ip
		user = await ctx.service.users.add(user);
		if (!user) {
			ERROR.msg = '注册失败，请重试'
			ctx.body = ERROR
			return
		} else {
			SUCCESS.msg = '注册成功'
			ctx.body = SUCCESS
		}
	}
}

module.exports = UserController
