'use strict';

const Service = require('egg').Service;

class CouponService extends Service {
    async all() {
        const {ctx}=this;
        const coupons=await ctx.model.Coupon.findAll();
        return coupons;
    
    }
    async one(id){
        const {ctx}=this;
        const coupon=ctx.model.Coupon.findByPk(id);
        if(!coupon){
           ctx.throw(404,'not found');
        }
        return coupon;
  
    }
    async add(body){
        const {ctx}=this;
        const coupon=await ctx.model.Coupon.create(body);
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

module.exports = CouponService;
