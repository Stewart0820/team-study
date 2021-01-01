'use strict';

const Service = require('egg').Service;

class StudioService extends Service {
    async all() {
        const {ctx}=this;
        const studios=await ctx.model.Studio.findAll();
        return studios;    
    }
    async one(id){
        const {ctx}=this;
        const studio=await ctx.model.Studio.findByPk(id);
        if(!studio){
            ctx.throw(404,'not found');
        }
        return studio;
  
    }
    async add(body){
        const {ctx}=this;
        const studio=await ctx.model.Studio.create(body);
        return studio;
  
    }
    async modify(id,body){
        const studio=await this.one(id);
        return await studio.update(body);  
    }
    async delete(id){
        const studio=await this.one(id);
        return await studio.destroy();
  
    }
}

module.exports = StudioService;
