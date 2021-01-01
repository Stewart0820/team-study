'use strict';

const Service = require('egg').Service;

class Order_actionService extends Service {
    async all() {
        const {ctx}=this;
        const actions=await ctx.model.OrderAction.findAll();
        return actions;
    
    }
    async one(id){
        const {ctx}=this;
        const action=await ctx.model.OrderAction.findByPk(id);
        if(!action){
            ctx.throw(404,'not found');
        }
        return action;
  
    }
    async add(body){
        const {ctx}=this;
        const action=await ctx.model.OrderAction.create(body);
        return action;
    }
    async modify(id,body){
        const action=await this.one(id);
        return await action.update(body);
  
    }
    async delete(id){
        const action=await this.one(id);
        return await action.destroy();
  
    }
}

module.exports = Order_actionService;
