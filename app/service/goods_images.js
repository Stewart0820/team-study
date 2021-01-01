'use strict';

const Service = require('egg').Service;

class Goods_imagesService extends Service {
    async all() {
        const {ctx}=this;
        const images=await ctx.model.GoodsImages.findAll();
        return images;
    
    }
    async one(id){
        const {ctx}=this;
        const image=await ctx.model.GoodsImages.findByPk(id);
        if(!image){
            ctx.throw(404,'not found');
        }
        return image;
    }
    async add(body){
        const {ctx}=this;
        const image=await ctx.model.GoodsImages.create(body);
        return image;
  
    }
    async modify(id,body){
        const image=await this.one(id);
  
    }
    async delete(id){
  
    }
}

module.exports = Goods_imagesService;
