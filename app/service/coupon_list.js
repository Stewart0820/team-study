'use strict';

const Service = require('egg').Service;

class Coupon_listService extends Service {
    async all() {
        const {ctx}=this;
        const coupon_lists=await ctx.model.CouponList.findAll();
        return coupon_lists;
    
    }
    async one(id){
        const {ctx}=this;
        const coupon_list=await ctx.model.CouponList.findByPk(id);
        if(!coupon_list){
          ctx.throw(404,'not found');
        }
        return coupon_list;
  
    }
    async add(body){
        const {ctx}=this;
        const coupon_list=await ctx.model.CouponList.create(body);
        return coupon_list;
  
    }
    async modify(id,body){

        const coupon_list=await this.one(id);
        return await coupon_list.update(coupon_list);
  
    }
    async delete(id){
        const coupon_list=await this.one(id);
        return await coupon_list.destroy();
  
    }
}

module.exports = Coupon_listService;
