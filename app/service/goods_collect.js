'use strict';

const Service = require('egg').Service;

class Goods_collectService extends Service {
    async all() {
        const {ctx}=this;
        const collects=await ctx.model.GoodsCollect.findAll();
        return collects;
    
    }
    async one(id){
        const {ctx}=this;
        const collect=await ctx.model.GoodsCollect.findByPk(id);
        if(!collect){
            ctx.throw(404,'not found')
        }
        return collect;
  
    }
    async add(body){
        const {ctx}=this;
        const collect=await ctx.model.GoodsCollect.create(body);
        return collect;
  
    }
    async modify(id,body){
        const collect=await this.one(id);
        return await collect.update(body);
  
    }
    async delete(id){
        const collect=await this.one(id);
        return await collect.destroy();
    }
}

module.exports = Goods_collectService;
