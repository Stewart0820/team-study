'use strict';

const Service = require('egg').Service;

class Expense_logService extends Service {
    async all() {
        const {ctx}=this;
        const logs=await ctx.model.ExpenseLog.findAll();
        return logs;
    
    }
    async one(id){
        const {ctx}=this;
        const log=await ctx.model.ExpenseLog.findByPk(id);
        if(!log){
           ctx.throw(404,'not found');
        }
        return log;
  
    }
    async add(body){
        const {ctx}=this;
        const log=await ctx.model.ExpenseLog.create(body);
        return log;
  
    }
    async modify(id,body){
        const log=await this.one(id);
        return await log.update(log);
  
    }
    async delete(id){
        const log=await this.one(id);
        return await log.destroy();
  
    }
}

module.exports = Expense_logService;
