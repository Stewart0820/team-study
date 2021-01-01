'use strict';

const Controller = require('egg').Controller;
/**
 * @controller 文章分类数据接口
 */
class ArticleCatController extends Controller {
   /**
   * @summary 获取文章分类
   * @description 获取文章分类
   * @router get /api/articlecate/getmobilearticlecates
   * @response 200 
   */
  async getMobileArticleCates() {
    const {ctx}=this;
    let fields=['cat_id','cat_name','show_in_nav']
    let articlecates=await ctx.service.articleCat.findMobileArticleCates(fields);
    ctx.body=articlecates;
  }

}

module.exports = ArticleCatController;
