'use strict';

const Service = require('egg').Service;

class ConfigService extends Service {
    async all() {
        const {ctx}=this;
        const configs=await ctx.model.Config.findAll();
        return configs;
    }
    async one(id){
        const {ctx}=this;
        const config=await ctx.model.Config.findByPk(id);
        if(!config){
          ctx.throw(404,'not found');
        }
        return config;
  
    }
    async add(body){
        const {ctx}=this;
        const config=await ctx.model.Config.create(body);
        return config;
  
    }
    async modify(id,body){
        const config=await this.one(id);
        return await config.update(body);
  
    }
    async delete(id){
        const config=await this.one(id);
        return await config.destroy();
  
    }
}

module.exports = ConfigService;
