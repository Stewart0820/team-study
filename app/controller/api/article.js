'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {

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