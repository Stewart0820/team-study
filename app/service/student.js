'use strict';

const Service = require('egg').Service;
const crypto = require('crypto');
const Sequelize=require('sequelize');
const Op=Sequelize.Op;
class StudentService extends Service {
    async all() {
        const {ctx}=this;
        const students=await ctx.model.Student.findAll({raw:true});
        return students;    
    }
    async one(id){
        const {ctx}=this;
        const student =await ctx.model.Student.findByPk(id);
        if(!student){
            ctx.throw(404,'not found');
        }
        return student;
    }
    async add(body){
        const {ctx}=this;
        const student=await ctx.model.Student.create(body);
        return student;  
    }
    async buckAdd(bodys){

        const {ctx}=this;
        const students=await ctx.model.Student.bulkCreate(bodys);
        return students;
    }
    async modify(id,body){
        const student=await this.one(id);
        return await student.update(body);  
    }
    async delete(id){
        const student=await this.one(id);
        return await student.destroy();  
    }
    /**
     * 学生登录
     * @param {*} studentNo 学号
     * @param {*} password 密码 
     */
    async login(studentNo,password){
        const {ctx,app}=this;

        let salt=app.config.salt;
        password=crypto.createHmac('sha256',salt).update(password).digest('hex')
        let option={
            where:{
                student_no:studentNo,
                password:password
            }
        }
        let student=await ctx.model.Student.findOne(option);
        return student;
    }
    /**
     * 
     * @param {*} condition 查询条件 必须 例如： {classmate_id:classmate_id}
     * @param {*} fields 查询字段 默认字段'id','student_name','student_no','password','depart_id','email','weixin','telephone','qq','classmate_id','status'
     * @param {*} orders 排序 可以为空
     */
    async findStudents(condition,fields,orders){
        const {ctx}=this;
        fields=fields||['id','student_name','student_no','password','depart_id','email','weixin','telephone','qq','classmate_id','status'];
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
        let students=await ctx.model.Student.findAll(options)
    
        return students;
      }
      /**
       * 通过部门编号查询学生信息
       * @param {*} depart_id 部门编号
       */
      async findStudentByDepartId(depart_id){
          const {ctx}=this;
        let options={
            attributes:['id','student_name'],
            where:{
                depart_id:depart_id,
                status:1
            },
            raw:true   
        }
        let students=await ctx.model.Student.findAll(options)
    
        return students;
      }
      /**
       * 通过学生编号获取学生信息
       * @param {*} ids 数组 学生编号
       */
      async findStudentsByIds(ids){
        const {ctx}=this;
        let options={
            attributes:['id','student_name'],
            where:{
                id:{
                    [Op.in]:ids
                }
            },
            raw:true   
        }
        let students=await ctx.model.Student.findAll(options)
    
        return students;
      }

      async changePassword(studentId,newPsw){
        const {app}=this;
        let salt=app.config.salt;
        let password=crypto.createHmac('sha256',salt).update(newPsw).digest('hex')
    
        let body={};
        body.id=studentId;
        body.password=password;
        let student= await this.modify(studentId,body);
    
        return student;
    
    
      }
}

module.exports = StudentService;
