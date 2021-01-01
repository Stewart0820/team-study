'use strict';

const Service = require('egg').Service;

class Region2Service extends Service {
    async all() {
        const {ctx}=this;
        const regions=await ctx.model.Region2.findAll();
        return regions; 
    }
    async one(id){
        const {ctx}=this;
        const region=await ctx.model.Region2.findByPk(id);
        return region;
  
    }
    async add(body){
        const {ctx}=this;
        const region=await ctx.model.Region2.create(body);
        return region;
  
    }
    async modify(id,body){
        const region=await this.one(id);
        return await region.update(body);
  
    }
    async delete(id){
        const region=await this.one(id);
        return await region.destroy(); 
    }
}

module.exports = Region2Service;
