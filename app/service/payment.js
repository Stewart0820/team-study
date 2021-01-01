'use strict';

const Service = require('egg').Service;

class PaymentService extends Service {
    async all() {
        const {ctx}=this;
        const payments=await ctx.model.Payment.findAll();
        return payments;
    }
    async one(id){
        const {ctx}=this;
        const payment=await ctx.model.Payment.findByPk(id);
        if(!payment){
            ctx.throw(404,'not found');
        }
        return payment;
  
    }
    async add(body){
        const {ctx}=this;
        const payment=await ctx.model.Payment.create(body);
        return payment;  
    }
    async modify(id,body){
        const payment =await this.one(id);
        return await payment.update(body);
  
    }
    async delete(id){
        const payment=await this.one(id);
        return await payment.destroy(); 
    }
}

module.exports = PaymentService;
