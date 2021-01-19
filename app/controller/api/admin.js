'use strict';

const Controller = require('egg').Controller;
const {getTimeStamp,ERROR,SUCCESS} =require('../../util/util');
const crypto = require('crypto');
class AdminController extends Controller {
  async login(){
    const {ctx,app}=this;
    let {verifycode}=ctx.request.body;
    if(verifycode===app.config.adminLoginVerifycode){
      let {email,password}=ctx.request.body;
      let salt=app.config.salt;
      password=crypto.createHmac('sha256',salt).update(password).digest('hex');
      let admin=await ctx.service.admin.login(email,password);
      if(admin){
        ctx.session.admin=true;
        ctx.session.admin=admin;
        let body=admin.dataValues;
        const {admin_id}=body;
        body.last_login=getTimeStamp();
        body.last_ip=ctx.ip;
        await ctx.service.admin.modify(admin_id,body);
        //登录日志
        let loginfo={};
        loginfo.admin_id=admin.admin_id;
        loginfo.log_info='管理员登录';
        loginfo.log_ip=ctx.ip;
        loginfo.log_url=ctx.path;
        loginfo.log_time=getTimeStamp();

        await ctx.service.adminLog.add(loginfo);

        SUCCESS.msg='登录成功'
        ctx.body=SUCCESS;
      }
      else{
        ERROR.msg='邮箱或者密码错误';
        ctx.body=ERROR
      }
    }
    else{
      ERROR.msg='认证码错误';
      ctx.body=ERROR
    }
     
  }
}

module.exports = AdminController;
