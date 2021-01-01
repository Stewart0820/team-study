'use strict';

const Service = require('egg').Service;
let Sequlize=require('sequelize');
let Op=Sequlize.Op;
class UserArticleService extends Service {
  async add(body) {
      const {ctx}=this;
      let ua=await ctx.model.UserArticle.create(body);
      return ua;
  }
  /**
   *通过用户获取文章的编号
   *
   * @param {*} userId用户编号
   * @returns 获取文章编号的集合
   * @memberof UserArticleService
   */
  async findArticleIdsByUserId(userId){
     const {ctx}=this;
     let options={
         where:{
            user_id:userId,
            usertype:2
         },
         raw:true
     }
     let articleIds=await ctx.model.UserArticle.findAll(options);
     return articleIds;
  }
}

module.exports = UserArticleService;
