'use strict';

const Service = require('egg').Service;

class GoodsService extends Service {
    async all() {
        const {ctx}=this;
        const goodes=await ctx.model.Goods.findAll();
        return goodes;
    }
    async one(id){
        const {ctx}=this;
        const goods=await ctx.model.Goods.findByPk(id);
        if(!goods){
            ctx.throw(404,'not found');
        }
        return goods
    }
    async add(body){
        const {ctx}=this;
        const goods=await ctx.model.Goods.create(body);
        return goods;
  
    }
    async modify(id,body){
        const goods=await this.one(id);
        return await goods.update(body);
  
    }
    async delete(id){
        const goods=await this.one(id);
        return await goods.destroy();
  
    }
}

module.exports = GoodsService;
