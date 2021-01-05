'use strict';

const Controller = require('egg').Controller;
const {
  ERROR,
  SUCCESS,
  RESULT,
  getTimeStamp,
  createSixNum
} = require('../../util/util')
const { sendTextMail } = require('../../util/mailerUtil')


/**
 * @controller 邮箱接口
 */
class EmailController extends Controller {


  /**
   * @summary 验证邮箱是否存在
   * @description 验证邮箱
   * @router post /api/email/checkemail
   * @request body email
   * @response 200 RESULT
   */  
  async checkRepeatEmail(){
    const {ctx}=this;
    const {email}=ctx.request.body;
    let user=await ctx.service.users.findUserByEmail(email);
    if(user){
      ERROR.msg='电子邮件重复，不可用';
      ctx.body=ERROR;
    }
    else{
      SUCCESS.msg='电子邮件可用'
      ctx.body=SUCCESS;
    }
  }
  /**
   * @summary 发送验证码
   * @description 发送验证码
   * @router post /api/email/email
   * @request body email
   * @response 200 RESULT
   */  
  async email() {
		const { ctx } = this
		const email = ctx.request.body //刚刚从前台传过来的邮箱
    console.log(email);
		const code = await createSixNum() //这里是我写的生成的随机六位数，等等下面给代码
		ctx.session.code = code
		var mail = {
			// 发件人
			from: '1939136076@qq.com',
			// 主题
			subject: '接受凭证', //邮箱主题
			// 收件人
			to: email.email_no, //前台传过来的邮箱
			// 邮件内容，HTML格式
			text: '用' + code + '作为你的验证码', //发送验证码
		}
		sendTextMail(mail)
    ctx.body=RESULT;
	}
}

module.exports = EmailController;