'use strict';

const Service = require('egg').Service;

class Goods_couponService extends Service {
    async all() {
        const {ctx}=this;
        const coupons=await ctx.model.GoodsCoupon.findAll();
        return coupons;
    }
    async one(id){
        const {ctx}=this;
        const coupon=await ctx.model.GoodsCoupon.findByPk(id);
        return coupon;
    }
    async add(body){
        const {ctx}=this;
        const coupon=await ctx.model.GoodsCoupon.create(body);
        if(!coupon){
            ctx.throw(404,'not found');
        }
        return coupon;
  
    }
    async modify(id,body){
        const coupon=await this.one(id);
        return await coupon.update(body);
  
    }
    async delete(id){
        const coupon=await this.one(id);
        return await coupon.destroy();
    }
}

module.exports = Goods_couponService;
