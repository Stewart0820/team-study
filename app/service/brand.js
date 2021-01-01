'use strict';

const Service = require('egg').Service;

class BrandService extends Service {
    async all() {
        const {ctx}=this;
        const brands=await ctx.model.Brand.findAll({raw:true});
        return brands;
    }
    async one(id){
        const {ctx}=this;
        const brand=await ctx.model.Brand.findByPk(id);
        if(!brand){
          ctx.throw(404,'not found');
        }
        return brand;
  
    }
    async add(body){
        const {ctx}=this;
        const brand=await ctx.model.Brand.create(body);
        return brand;
  
    }
    async modify(id,body){
        const brand=await this.one(id);
        return await brand.update(body);
  
    }
    async delete(id){
        const brand=await this.one(id);
        return await brand.destroy();
    }
}

module.exports = BrandService;
