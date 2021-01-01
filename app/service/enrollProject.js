'use strict';

const Service = require('egg').Service;

class EnrollProjectService extends Service {
    async all() {
        const {ctx} =this;
        return await ctx.model.EnrollProject.findAll();
      }
      async one(id){
        const {ctx} =this;
        const enrollproject= await ctx.model.EnrollProject.findByPk(id);
        if(!enrollproject){
          this.ctx.throw(404,'notfound');
        }
        return enrollproject;
      }
      async add(body){
        const {ctx} =this;
        body=await ctx.model.EnrollProject.create(body);
        return body;
      }
      /**
       * 批量添加
       * @param {*} bodys EnrollProject数组 []
       */
      async buckAdd(bodys){
        const {ctx} =this;
        let eps=await ctx.model.EnrollProject.bulkCreate(bodys);
        return eps;
      }
      async modify(id,body){
    
        const enrollproject=await this.one(id);
        return await  enrollproject.update(body)
    
      }
      async  delete(id){
        const enrollproject=await this.one(id);
        return await enrollproject.destroy();
    
      }
      async findEnrollProjectsByStudentId(studentId){

        const {ctx}=this;
        let options={
          where:{
            user_id:studentId,
            user_type:1
          },
          order:[
            ['create_time','desc']
          ]
        }

        let eps=await ctx.model.EnrollProject.findAll(options);
        return eps;
      }

}

module.exports = EnrollProjectService;
