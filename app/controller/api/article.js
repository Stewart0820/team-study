'use strict';

const Controller = require('egg').Controller;
/**
 * @controller 文章数据接口
 */
class ArticleController extends Controller {
    /**
   * @summary 获取公开文章
   * @description 获取公开文章
   * @router get /api/articles/open
   * @request query cat_id
   * @response 200 
   */
    async getOpenArticles() {
        const {
            ctx
        } = this;
        let articles;
        const {
            cat_id
        } = ctx.query;
        if (cat_id) {
            articles = await ctx.service.article.findOpenArticlesByCatId(undefined, cat_id);
        } else {

            articles = await ctx.service.article.findOpenArticles();
        }
        ctx.body = articles;
    }
   /**
    *@summary 获取文章实例
   * @description 获取文章实例
   * @router get /api/article/one
   * @request query integer id 文章的编号
   * @response 200 
   */
    async getSingle(){
        const {ctx}=this;
        const {
            id
        } = ctx.query;
        let article = await ctx.service.article.one(id);
        ctx.body=article;
    }

}

module.exports = ArticleController;