'use strict';

const Service = require('egg').Service;

class Distribute_levelService extends Service {
    async all() {
        const {ctx}=this;
        const levels=await ctx.model.DistributLevel.findAll();
        return levels;
    }
    async one(id){
        const {ctx}=this;
        const level=await ctx.model.DistributLevel.findByPk(id);
        if(!level){
           ctx.throw(404,'not found');
        }
        return level;
  
    }
    async add(body){
        const {ctx}=this;
        const level=await ctx.model.DistributLevel.create(body);
        return level;
    }
    async modify(id,body){
        const level=await this.one(id);
        return await level.update(body);
    }
    async delete(id){
        const level=await this.one(id);
        return await level.destroy();
  
    }
}

module.exports = Distribute_levelService;
