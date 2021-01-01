'use strict';

const Service = require('egg').Service;
const crypto = require('crypto');
const Sequelize=require('sequelize');
const Op=Sequelize.Op;
class TeacherService extends Service {
    async all() {
        const {ctx}=this;
        const teachers=await ctx.model.Teacher.findAll();
        return teachers;
    
    }
    async one(id){
        const {ctx}=this;
        const teacher=await ctx.model.Teacher.findByPk(id);
        return teacher;  
    }
    async add(body){
        const {ctx}=this;
        const teacher=await ctx.model.Teacher.create(body);
        return teacher;
    }
    async bulkAdd(bodys){
        const {ctx}=this;
        const teachers=await ctx.model.Teacher.bulkCreate(bodys);
        return teachers;
    }
    async modify(id,body){
        const teacher=await this.one(id);
        return await teacher.update(body); 
    }
    async delete(id){
        const teacher=await this.one(id);
        return await teacher.destroy();
    }
    /**
     * 教师登录
     * @param {*} teacher_no 工号
     * @param {*} password 密码
     */
    async login(teacher_no,password){
        const {ctx,app}=this;
        let salt=app.config.salt;
        password=crypto.createHmac('sha256',salt).update(password).digest('hex')
        let option={
            where:{
                teacher_no:teacher_no,
                password:password
            }
        }
        const teacher=await ctx.model.Teacher.findOne(option);

        return teacher;
    }
    /**
   * 
   * @param {*} condition 查询条件 {depart_id:depart_id}
   * @param {*} fields 查询字段 默认 'id','teacher_name','teacher_no','password','depart_id','email','weixin','telephone','qq','in_school','professional','status'
   * @param {*} orders 查询字段 可以为空
   */
  async findTeachers(condition,fields,orders){
    const {ctx}=this;
    fields=fields||['id','teacher_name','teacher_no','password','depart_id','email','weixin','telephone','qq','in_school','professional','status'];
    let options={}
    if(orders){
        options.attributes=fields;
        options.where=condition;
        options.order=[orders]; 
        options.raw=true
    }
    else{
        options.attributes=fields;
        options.where=condition;
        options.raw=true
    }
    let teachers=await ctx.model.Teacher.findAll(options)

    return teachers;
  }
  async findTeachersByIds(ids){
    const {ctx,app}=this;
    let options={
        attributes:['id','teacher_name'],
        where:{
            id:{
                [Op.in]:ids
            }
        },
        raw:true   
    }
    let teachers=await ctx.model.Teacher.findAll(options)

    return teachers;
  }
  async changePassword(teacherId,newPsw){
    const {app}=this;
    let salt=app.config.salt;
    let password=crypto.createHmac('sha256',salt).update(newPsw).digest('hex')

    let body={};
    body.id=teacherId;
    body.password=password;
    let teacher= await this.modify(teacherId,body);

    return teacher;

  }
}

module.exports = TeacherService;
