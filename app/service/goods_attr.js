'use strict';

const Service = require('egg').Service;

class Goods_attrService extends Service {
    async all() {
        const {ctx}=this;
        const attrs=await ctx.model.GoodsAttr.findAll();
        return attrs;
    
    }
    async one(id){
        const {ctx}=this;
        const attr=await ctx.model.GoodsAttr.findByPk(id);
        if(!attr){
            ctx.throw(404,'not found');
        }
        return attr;
  
    }
    async add(body){
        const {ctx}=this;
        const attr=await ctx.model.GoodsAttr.create(body);
        return attr;
  
    }
    async modify(id,body){
        const attr=await this.one(id);
        return await attr.update(body);
  
    }
    async delete(id){
        const attr=await this.one(id);
        return await attr.destroy();
  
    }
}

module.exports = Goods_attrService;
