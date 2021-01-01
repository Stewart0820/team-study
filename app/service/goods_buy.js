'use strict';

const Service = require('egg').Service;

class Goods_buyService extends Service {
    async all() {
        const {ctx}=this;
        const buys=await ctx.model.GoodsBuy.findAll();
        return buys;
    
    }
    async one(id){
        const {ctx}=this;
        const buy=await ctx.model.GoodsBuy.findByPk(id);
        if(!buy){
            ctx.throw(404,'not found');
        }
        return buy;
  
    }
    async add(body){
        const {ctx}=this;
        const buy=await ctx.model.GoodsBuy.create(body);
        return buy;
    }
    async modify(id,body){
        const buy=await this.one(id);
        return await buy.update(body);
  
    }
    async delete(id){
        const buy=await this.one(id);
        return await buy.destroy();
    }
}

module.exports = Goods_buyService;
