'use strict';

const Controller = require('egg').Controller;
const {
    RESULT
  } = require('../../util/util')

class TeacherController extends Controller {

  async login() {
      const {ctx,app}=this;
      const {teacher_no,password}=ctx.request.body;

      let teacher=await ctx.service.teacher.login(teacher_no,password);
      if(teacher){
        RESULT.code=1;
        RESULT.msg='登录成功';
        RESULT.data=teacher;
      }
      else{
        RESULT.code=0;
        RESULT.msg='登录失败,请检查用户名或者密码'; 
      }

      ctx.body=RESULT;
  }
  
}

module.exports = TeacherController;
