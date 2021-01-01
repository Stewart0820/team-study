'use strict';

const Service = require('egg').Service;

class Goods_typeService extends Service {
    async all() {
        const {ctx}=this;
        const types=await ctx.model.GoodsType.findAll();
        return types;
    }
    async one(id){
        const {ctx}=this;
        const type=await ctx.model.GoodsType.findByPk(id);
        return type;
  
    }
    async add(body){
        const {ctx}=this;
        const type=await ctx.model.GoodsType.create(body);
        return type;
  
    }
    async modify(id,body){
        const type=await this.one(id);
        return await type.update(body);
    }
    async delete(id){
        const type=await this.one(id);
        return await type.destroy();
  
    }
}

module.exports = Goods_typeService;
