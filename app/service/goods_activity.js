'use strict';

const Service = require('egg').Service;

class Goods_activityService extends Service {
    async all() {
        const {ctx}=this;
        const activities=await ctx.model.GoodsActivity.findAll();
        return activities;
    
    }
    async one(id){
        const {ctx}=this;
        const activity=await ctx.model.GoodsActivity.findByPk(id);
        if(!activity){
            ctx.throw(404,'not found');
        }
        return activity;
    }
    async add(body){
        const {ctx}=this;
        const activity=await ctx.model.GoodsActivity.create(body);
        return activity;
    }
    async modify(id,body){
        const activity=await this.one(id);
        return await activity.update(activity);
    }
    async delete(id){
        const activity=await this.one(id);
        return await activity.destroy();
    }
}

module.exports = Goods_activityService;
