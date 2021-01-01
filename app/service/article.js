'use strict';

const Service = require('egg').Service;
let Sequlize=require('sequelize');
let Op=Sequlize.Op;
class ArticleService extends Service {
  async all() {
    const {ctx}=this;
    const articles=await  ctx.model.Article.findAll({raw:true});
    return articles;
  }
  async findArticles(fields){
    const {ctx}=this;
    fields=fields||['article_id', 'cat_id', 'title', 'author', 'keywords', 'is_open', 'add_time', 'thumb', 'link'];
    let options={
      attributes:fields,
      order:[
        ['publish_time']
      ],
      raw:true
    }
    const articles=await  ctx.model.Article.findAll(options);
    return articles;
  }
  async findOpenArticles(fields){
    const {ctx}=this;
    fields=fields||['article_id', 'cat_id', 'title', 'author', 'keywords', 'is_open', 'add_time', 'thumb', 'link'];
    let options={
      attributes:fields,
      where:{
        is_open:1
      },
      order:[
        ['publish_time']
      ]
      ,
      raw:true
    }
    const articles=await  ctx.model.Article.findAll(options);
    return articles;
  }
/**
 *通过文章编号获取文章
 *
 * @param {*} articleIds 文章编号集合
 * @memberof ArticleService
 */
  async findArticlesByIds(articleIds){
    const {ctx}=this;
    let options={
      attributes:{exclude:['content']},
      where:{
        article_id:{
          [Op.in]:articleIds
        }
      },
      order:[
        ['publish_time','desc']
      ]
      ,
      raw:true
    }
    const articles=await  ctx.model.Article.findAll(options);
    return articles;
  }
  async findOpenArticlesByCatId(fields,cat_id){
    const {ctx}=this;
    fields=fields||['article_id', 'cat_id', 'title', 'author', 'keywords', 'is_open', 'add_time', 'thumb', 'link'];
    let options={
      attributes:fields,
      where:{
        is_open:1,
        cat_id:cat_id
      },
      order:[
        ['publish_time']
      ]
      ,
      raw:true
    }
    const articles=await  ctx.model.Article.findAll(options);
    return articles;
  }

  async one(id){
    const {ctx}=this;
    const article=await ctx.model.Article.findByPk(id);
    if(!article){
      ctx.throw(404,'not found');
    }
    return article;
  }
  async add(body){
    const {ctx}=this;
    const article=await ctx.model.Article.create(body);
    return article;
  }
  async modify(id,body){
     const article=await this.one(id);
     return await article.update(body);

  }
  async delete(id){
   const article=await this.one(id);
   return await article.destroy();
  }
}

module.exports = ArticleService;
