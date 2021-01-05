'use strict';

const Controller = require('egg').Controller;

class ArticleCatController extends Controller {

  async getMobileArticleCates() {
    const {ctx}=this;
    let fields=['cat_id','cat_name','show_in_nav']
    let articlecates=await ctx.service.articleCat.findMobileArticleCates(fields);
    ctx.body=articlecates;
  }

}

module.exports = ArticleCatController;
