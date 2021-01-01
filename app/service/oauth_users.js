'use strict';

const Service = require('egg').Service;

class Oauth_usersService extends Service {
    async all() {
        const {ctx}=this;
        const oauths=await ctx.model.OauthUsers.findAll();
        return oauths;
    }
    async one(id){
        const {ctx}=this;
        const oauth=await ctx.model.OauthUsers.findByPk(id);
        if(!oauth){
            ctx.throw(404,'not found');
        }
        return oauth;
  
    }
    async add(body){
        const {ctx}=this;
        const oauth=await ctx.model.OauthUsers.create(body);
        return oauth;
  
    }
    async modify(id,body){
        const oauth=await this.one(id);
        return await oauth.update(body);
  
    }
    async delete(id){
        const oauth=await this.one(id);
        return await oauth.destroy();
  
    }
}

module.exports = Oauth_usersService;
