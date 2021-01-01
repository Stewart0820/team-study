'use strict';

const Service = require('egg').Service;

class Order_goodsService extends Service {
    async all() {
        const {ctx}=this;
        const order_goodes=await ctx.model.OrderGoods.findAll();
        return order_goodes;    
    }
    async one(id){
        const {ctx}=this;
        const order_goods=await ctx.model.OrderGoods.findByPk(id);
        if(!order_goods){
            ctx.throw(404,'not found');
        }
        return order_goods;
    }
    async add(body){
        const {ctx}=this;
        const order_goods=await ctx.model.OrderGoods.create(body);
        return order_goods;  
    }
    async modify(id,body){
        const order_goods=await this.one(id);
        return await order_goods.update(body); 
    }
    async delete(id){
        const order_goods=await this.one(id);

        return await order_goods.destroy();
  
    }
}

module.exports = Order_goodsService;
