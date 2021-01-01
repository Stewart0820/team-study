'use strict';

const Service = require('egg').Service;

class Goods_consultService extends Service {
    async all() {
        const {ctx}=this;
        const consults=await ctx.model.GoodsConsult.findAll();
        return consults;
    
    }
    async one(id){
        const {ctx}=this;
        const consult=await ctx.model.GoodsConsult.findByPk(id);
        if(!consult){
            ctx.throw(404,'not found')
        }
        return consult;
  
    }
    async add(body){
        const {ctx}=this;
        const consult=await ctx.model.GoodsConsult.create(body);
        return consult;
  
    }
    async modify(id,body){
        const consult=await this.one(id);
        return await consult.update(body);
    }
    async delete(id){
        const consult=await this.one(id);
        return await consult.destroy();
    }
}

module.exports = Goods_consultService;
