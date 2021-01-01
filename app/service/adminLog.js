'use strict';

const Service = require('egg').Service;

class AdminLogService extends Service {
    async all() {
        const {ctx}=this;
        const admin_logs= await ctx.model.AdminLog.findAll();
        return admin_logs;
    
    }
    async one(id){
        const {ctx}=this;
        const admin_log=await ctx.model.AdminLog.findByPk(id);
        if(!admin_log){
         ctx.throw(404,'not found')
        }
        return admin_log;
  
    }
    async add(body){
        const {ctx}=this;
        const admin_log=await ctx.model.AdminLog.create(body)
        return admin_log;
    }
    async modify(id,body){
        const admin_log=await this.one(id);
        return await admin_log.update(body);
  
    }
    async delete(id){
      const admin_log=await this.one(id);
      return await admin_log.destroy();
    }
    async findLogsByAdminId(admin_id){
        const {ctx}=this;
        let  options={
            where:{
                admin_id:admin_id
            },
            order:[
                ['log_time','DESC']
            ]
        }

        let logs= await ctx.model.AdminLog.findAll(options);
        return logs;
    }
}

module.exports = AdminLogService;
