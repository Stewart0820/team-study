'use strict';

const Controller = require('egg').Controller;
const {
    RESULT
  } = require('../../util/util')
/**
 * @controller 教师数据接口
 */
class TeacherController extends Controller {
   /**
   * @summary 教师登录
   * @description 教师登录
   * @router post /api/teacher/login
   * @request body teacher
   * @response 200 RESULT
   */  
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
