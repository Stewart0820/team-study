'use strict';

const Service = require('egg').Service;

class Goods_visitService extends Service {
    async all() {
        const {ctx}=this;
        const visits=await ctx.model.GoodsVisit.findAll();
        return visits;
    }
    async one(id){
        const {ctx}=this;
        const visit=await ctx.model.GoodsVisit.findByPk(id);
        return visit;
    }
    async add(body){
        const {ctx}=this;
        const visit=await ctx.model.GoodsVisit.create(body);
        return visit;
  
    }
    async modify(id,body){
        const visit=await this.one(id);
        return await visit.update(body);
    }
    async delete(id){
        const visit=await this.one(id);
        return await visit.destroy();
    }
}

module.exports = Goods_visitService;
