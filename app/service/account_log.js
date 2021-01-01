'use strict';

const Service = require('egg').Service;

class Account_logService extends Service {
    async all() {
     const {ctx}=this;
     const account_logs= await ctx.model.AccountLog.findAll();
     return account_logs;
    }
    async one(id){
        const {ctx}=this;
        const account_log=await ctx.model.AccountLog.findByPk(id);
        if(!account_log){
         ctx.throw(404,'not found');
        }
        return account_log;
    }
    async add(body){
        const {ctx}=this;
        const account_log=await ctx.model.AccountLog.create(body);
        return account_log;
  
    }
    async modify(id,body){
        let account_log=await this.one(id)
        return await account_log.update(body);
    }
    async delete(id){
        let account_log=await this.one(id)
        return await account_log.destroy();
    }
}

module.exports = Account_logService;
