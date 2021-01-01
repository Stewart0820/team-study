'use strict';

const Service = require('egg').Service;

class AdService extends Service {
   
    async all() {
        const {ctx}=this;
        const ads = await ctx.model.Ad.findAll();
        return ads;
    }
    async one(id) {
        const {ctx}=this;
        const ad = await ctx.model.Ad.findByPk(id);
        if(!ad){
           ctx.throw(404,'not found')
        }
        return ad;
    }
    async add(id,ad) {
        const {ctx}=this;
        ad= await ctx.model.Ad.create(ad);
        return ad;
    }
    async delete(id) {
       
        const ad=await this.one(id);
        return await ad.destroy();
    }

}

module.exports = AdService;