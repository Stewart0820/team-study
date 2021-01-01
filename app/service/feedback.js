'use strict';

const Service = require('egg').Service;

class FeedbackService extends Service {
    async all() {
        const {ctx}=this;
        const feedbacks=await ctx.model.Feedback.findAll();
        return feedbacks; 
    
    }
    async one(id){
        const {ctx}=this;
        const feedback=await ctx.model.Feedback.findByPk(id);
        return feedback;
  
    }
    async add(body){
        const {ctx}=this;
        const feedback=await ctx.model.Feedback.create(body);
        return feedback;
  
    }
    async modify(id,body){
        const feedback=await this.one(id);
        return await feedback.update(feedback);
  
    }
    async delete(id){
        const feedback=await this.one(id);
        return await feedback.destroy();
  
    }
}

module.exports = FeedbackService;
