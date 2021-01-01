'use strict';

const Service = require('egg').Service;

class FileinfoService extends Service {
    async all() {
        const {ctx} =this;
        return await ctx.model.FileInfo.findAll();
      }
      async one(id){
        const {ctx} =this;
        const fileinfo= await ctx.model.FileInfo.findByPk(id);
        if(!fileinfo){
          this.ctx.throw(404,'notfound');
        }
        return fileinfo;
      }
      async add(body){
        const {ctx} =this;
        body=await ctx.model.FileInfo.create(body);
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

module.exports = FileinfoService;
