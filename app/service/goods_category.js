'use strict';

const Service = require('egg').Service;

class Goods_categoryService extends Service {
    async all() {
        const {ctx}=this;
        const goods_categorys=await ctx.model.GoodsCategory.findAll();
        return goods_categorys;
    
    }
    async one(id){
        const {ctx}=this;
        const goods_category=await ctx.model.GoodsCategory.findByPk(id);
        if(!goods_category){
            ctx.throw(404,'not found');
        }
        return goods_category;
  
    }
    async add(body){
        const {ctx}=this;
        const goods_category=await ctx.model.GoodsCategory.create(body);
        return goods_category;
  
    }
    async modify(id,body){

        const goods_category= await this.one(id);
        return await goods_category.update(body);
  
    }
    async delete(id){
        const goods_category=await this.one(id);
        return await goods_category.destroy();
  
    }
}

module.exports = Goods_categoryService;
