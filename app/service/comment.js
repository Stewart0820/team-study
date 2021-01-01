'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
    async all() {
        const {ctx}=this;
        const comments=await ctx.model.Comment.findAll();
        return comments;
    }
    async one(id){
        const {ctx}=this;
        const comment=await ctx.model.Comment.findByPk(id);
        if(!comment){
           ctx.throw(404,'not found');
        }
        return comment;
    }
    async add(body){
        const {ctx}=this;
        const comment=await ctx.model.Comment.create(body);
        return comment;

    }
    async modify(id,body){
        const comment=await this.one(id);
        return await comment.update();
    }
    async delete(id){
        const comment=await this.one(id);
        return  await comment.destroy();
  
    }
}

module.exports = CommentService;
