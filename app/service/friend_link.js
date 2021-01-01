'use strict';

const Service = require('egg').Service;

class Friend_linkService extends Service {
    async all() {
        const {ctx}=this;
        const friend_links=await ctx.model.FriendLink.findAll();
        return friend_links;
    
    }
    async one(id){
        const {ctx}=this;
        const friend_link=await ctx.model.FriendLink.findByPk(id);
        if(!friend_link){
          ctx.throw(404,'not found');
        }
        return friend_link;
  
    }
    async add(body){
        const {ctx}=this;
        const friend_link=await ctx.model.FriendLink.create(body);
        return friend_link;
    }
    async modify(id,body){
        const friend_link=await this.one(id);
        return await friend_link.update(body);
  
    }
    async delete(id){
        const friend_link=await this.one(id);
        return await friend_link.destroy();
    }
}

module.exports = Friend_linkService;
