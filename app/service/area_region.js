'use strict';

const Service = require('egg').Service;

class Area_regionService extends Service {
    async all() {
        const {ctx}=this;
        const area_regions=await ctx.model.AreaRegion.findAll();
        return area_regions;
    }
    async one(id){
        const {ctx}=this;
        const area_region=await ctx.model.AreaRegion.findByPk(id);
        if(!area_region){
           ctx.throw(404,'not found');
        }
        return area_region;
    }
    async add(body){
        const {ctx}=this;
        const area_region=await ctx.model.AreaRegion.create(body);
        return area_region;
    }
    async modify(id,body){
        const area_region=await this.one(id);
        return await area_region.update(body);
    }
    async delete(id){
          const area_region=await this.one(id);
          return await area_region.destroy();
    }
}

module.exports = Area_regionService;
