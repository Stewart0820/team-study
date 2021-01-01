'use strict';

const Service = require('egg').Service;

class CartService extends Service {
    async all() {
        const {ctx}=this;
        const carts=await ctx.model.Cart.findAll();
        return carts;
    }
    async one(id){
        const {ctx}=this;
        const cart=await ctx.model.Cart.findByPk(id);
        if(!cart){
           ctx.throw(404,'not found');
        }
        return cart;
  
    }
    async add(body){
        const {ctx}=this;
        const cart=await ctx.model.Cart.create(ctx);
        return cart;
  
    }
    async modify(id,body){
        const cart=await this.one(id);
        return await cart.update(body);
  
    }
    async delete(id){
        const cart=await this.one(id);
        return await cart.destroy();
  
    }
}

module.exports = CartService;
