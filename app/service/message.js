'use strict';

const Service = require('egg').Service;

class MessageService extends Service {
    async all() {
        const {ctx}=this;
        const messages=await ctx.model.Message.findAll();
        return messages;
    
    }
    async one(id){
        const {ctx}=this;
        const message=await ctx.model.Message.findByPk(id);
        if(!message){
            ctx.throw(404,'not found');
        }
        return message; 
  
    }
    async add(body){
        const {ctx}=this;
        const message=await ctx.model.Message.create(body);
        return message;
  
    }
    async modify(id,body){
        const message=await this.one(id);
        return await message.update(body);
  
    }
    async delete(id){
        const message=await this.one(id);
        return await message.destroy();
  
    }
}

module.exports = MessageService;
