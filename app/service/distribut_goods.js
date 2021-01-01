'use strict';

const Service = require('egg').Service;

class Distribut_goodsService extends Service {
    async all() {
        const {ctx}=this;
        const distributes=await ctx.model.DistributGoods.findAll();
        return distributes;
    
    }
    async one(id){
        const {ctx}=this;
        const distribute=await ctx.model.DistributGoods.findByPk(id);
        if(!distribute){
            ctx.throw(404,'not found');
        }
        return distribute;
  
    }
    async add(body){
        const {ctx}=this;
        const distribute=await ctx.model.DistributGoods.create(body);
        return distribute;
  
    }
    async modify(id,body){
        const distribute=await this.one(id);
        return await distribute.update(distribute);
  
    }
    async delete(id){
        const distribute=await this.one(id);

        return await distribute.destroy();
  
    }
}

module.exports = Distribut_goodsService;
