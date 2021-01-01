'use strict';

const Service = require('egg').Service;

class FolderService extends Service {
  async all() {
    const {ctx} =this;
    return await ctx.model.Folder.findAll();
  }
  async one(id){
    const {ctx} =this;
    const folder= await ctx.model.Folder.findByPk(id);
    if(!folder){
      this.ctx.throw(404,'notfound');
    }
    return folder;
  }
  async add(body){
    const {ctx} =this;
    body=await ctx.model.Folder.create(body);
    return body;

  }
  async modify(id,body){

    const folder=await this.one(id);
    return await  folder.update(body)

  }
  async  delete(id){
    const folder=await this.one(id);
    return await folder.destroy();
  }
}

module.exports = FolderService;
