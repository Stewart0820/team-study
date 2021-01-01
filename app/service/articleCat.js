'use strict';

const Service = require('egg').Service;
/**
 * 文章分类服务
 */
class ArticleCatService extends Service {
 
  async one(id) {
    const {ctx}=this;
    let articleCat=await ctx.model.ArticleCat.findByPk(id);
    if(!articleCat){
       ctx.throw(404,'not found')
    }
    return articleCat;
    
  }
  /**
   * 获得所用文章分类信息
   */
  async all(){
    const {ctx}=this;
    const articlecats=await ctx.model.ArticleCat.findAll();
    return articlecats;
  }
  async findArticleCates(fields){
    const {ctx}=this;
    fields=fields||['cat_id','cat_name',  'cat_type', 'parent_id', 'show_in_nav', 'sort_order', 'keywords'];
    let options={
      attributes:fields,
      order:[
        ['sort_order']
      ],
      raw:true
    }
   
    const articlecates=await  ctx.model.ArticleCat.findAll(options);
    return articlecates;
  }
  async findArticleCates(where,fields){
    const {ctx}=this;
    fields=fields||['cat_id','cat_name'];
    let options={
      attributes:fields,
      where:where,
      order:[
        ['sort_order']
      ],
      raw:true
    }
   
    const articlecates=await  ctx.model.ArticleCat.findAll(options);
    return articlecates;

  }

  async findMobileArticleCates(fields){
    const {ctx}=this;
    fields=fields||['cat_id','cat_name', 'cat_type', 'parent_id', 'show_in_nav', 'sort_order', 'keywords'];
    let options={
      attributes:fields,
      where:{
        cat_type:1
      },
      order:[
        ['sort_order']
      ],
      raw:true
    }
    const articlecates=await  ctx.model.ArticleCat.findAll(options);
    return articlecates;
  }
  /**
   * 删除文章分类信息
   * @param {*} id 文章分类主键
   */
  async delete(id){
    let articleCat=await this.one(id);
    return await articleCat.destroy();

  }
  /**
   * 更新文章分类信息
   * @param {*} articlecat 
   */
  async modify(id,body){
    let articleCat=await this.one(id);
    let res=await articleCat.update(body)
    return res;
  }
  /**
   * 插入文章分类信息
   * @param {*} articlecate 
   */
  async add(body){
    const {ctx}=this;
     const articleCate=await ctx.model.ArticleCat.create(body);
     return articleCate;
  }
  /**
   * 查询文章分类信息
   * @param {*} articlecat 
   */
  async query(articlecat){

  }
  /**
   * 获得子分类
   * @param {*} pid 
   */
  async child(pid){

  }
}

module.exports = ArticleCatService;
