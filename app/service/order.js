'use strict';

const Service = require('egg').Service;

class OrderService extends Service {
    async all() {
        const {ctx}=this;
        const orders=await ctx.model.Order.findAll();
        return orders;
    }
    async one(id){
        const {ctx}=this;
        const order=await ctx.model.Order.findByPk(id);
        if(!order){
            ctx.throw(404,'not found')
        }
        return order;
  
    }
    async add(body){
        const {ctx}=this;
        const order=await ctx.model.Order.create(body);
        return order;
  
    }
    async modify(id,body){
        const order=await this.one(id);
        return await order.update(body); 
    }
    async delete(id){
        const order=await this.one(id);
        return await order.destroy();
  
    }
}

module.exports = OrderService;
