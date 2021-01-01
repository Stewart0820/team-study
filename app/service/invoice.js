'use strict';

const Service = require('egg').Service;

class InvoiceService extends Service {
    async all() {
        const {ctx}=this;
        const invoices=await ctx.model.Invoice.findAll();
        return invoices;
    
    }
    async one(id){
        const {ctx}=this;
        const invoice=await ctx.model.Invoice.findByPk(id);
        if(!invoice){
            ctx.throw(404,'not found');
        }
        return invoice;
    }
    async add(body){
        const {ctx}=this;
        const invoice=await ctx.model.Invoice.create(body);
        return invoice;
  
    }
    async modify(id,body){
        const invoice=await this.one(id);
        return await invoice.update(body);
  
    }
    async delete(id){
        const invoice=await this.one(id);
        return await invoice.destroy();
    }
}

module.exports = InvoiceService;
