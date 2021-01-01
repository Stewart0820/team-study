'use strict';

const Service = require('egg').Service;

class User_logService extends Service {
    async all() {
        const {ctx}=this;
        const tuser_logs= await ctx.model.UserLog.findAll();
        return tuser_logs;
    
    }
    async one(id){
        const {ctx}=this;
        const tuser_log=await ctx.model.UserLog.findByPk(id);
        if(!tuser_log){
         ctx.throw(404,'not found')
        }
        return teacher_log;
  
    }
    async add(body){
        const {ctx}=this;
        const tuser_log=await ctx.model.UserLog.create(body)
        return tuser_log;
    }
    async modify(id,body){
        const tuser_log=await this.one(id);
        return await tuser_log.update(body);
  
    }
    async delete(id){
      const tuser_log=await this.one(id);
      return await tuser_log.destroy();
    }
    async findLogsByUserId(user_id,usertype){
        const {ctx}=this;
        let  options={
            where:{
                user_id:user_id,
                usertype:usertype
            },
            limit: 10,
            order:[
                ['log_time','DESC']
            ]
        }

        let logs= await ctx.model.UserLog.findAll(options);
        return logs;
    }
}

module.exports = User_logService;
