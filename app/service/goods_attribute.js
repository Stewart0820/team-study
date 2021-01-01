'use strict';

const Service = require('egg').Service;

class Goods_attributeService extends Service {
    async all() {
        const {ctx}=this;
         const attributes=await ctx.model.GoodsAttribute.findAll();
         return attributes;
    }
    async one(id){
        const {ctx}=this;
        const attribute=await ctx.model.GoodsAttribute.findByPk(id);
        if(!attribute){
            ctx.throw(404,'not found');
        }
        return attribute;
  
    }
    async add(body){
        const {ctx}=this;
        const attribute=await ctx.model.GoodsAttribute.create(body);
        return attribute;
    }
    async modify(id,body){
        const attribute=await this.one(id);
        return await attribute.update(body);
  
    }
    async delete(id){
        const attribute=await this.one(id);
        return await attribute.destroy();
    }
}

module.exports = Goods_attributeService;
