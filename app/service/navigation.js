'use strict';

const Service = require('egg').Service;

class NavigationService extends Service {
    async all() {
        const {ctx}=this;
        const navs=await ctx.model.Navigation.findAll();
        return navs;
    }
    async one(id){
        const {ctx}=this;
        const nav=await ctx.model.Navigation.findByPk(id);
        if(!nav){

        }
        return nav;
    }
    async add(body){
        const {ctx}=this;
        const nav=await ctx.model.Navigation.create(body);
        return nav;

  
    }
    async modify(id,body){
        const nav=await this.one(id);
        return await nav.update(body);
  
    }
    async delete(id){
        const nav=await this.one(id);
        return await nav.destroy(); 
    }
}

module.exports = NavigationService;
