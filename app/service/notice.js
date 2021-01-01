'use strict';

const Service = require('egg').Service;

class NoticeService extends Service {
    async all() {
        const {ctx}=this;
        const notices=await ctx.model.Notice.findAll({raw:true});
        return notices;
    }
    async one(id){
        const {ctx}=this;
        const notice=await ctx.model.Notice.findByPk(id);
        if(!notice){
            ctx.throw(404,'not found');
        }
        return notice;
    }
    async add(body){
        const {ctx}=this;
        const notice=await ctx.model.Notice.create(body);
        return notice;

  
    }
    async modify(id,body){
        const notice=await this.one(id);
        return await notice.update(body);
  
    }
    async delete(id){
        const notice=await this.one(id);
        return await notice.destroy(); 
    }
}

module.exports = NoticeService;
