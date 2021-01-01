'use strict';

const Service = require('egg').Service;

class ClassinfoService extends Service {
    async all() {
        const {ctx}=this;
        const classinfos=await ctx.model.Classinfo.findAll();
        return classinfos;
    
    }
    /**
     * 查询班级列表通过部门编号
     * @param {*} depart_id 部门编号
     */
    async findClassinfosByDepartId(depart_id){
        const {
            ctx
        } = this;
        let options={
            attributes:['id','classinfo_name'],
            where:{
              depart_id:depart_id,
              
            },
            raw:true
          }
          const classinfos=await ctx.model.Classinfo.findAll(options);
          return classinfos;

    }


    async one(id){
        const {ctx}=this;
        const classinfo=await ctx.model.Classinfo.findByPk(id);
        if(!classinfo){
          ctx.throw(404,'not found');
        }
        return classinfo;
  
    }
    async add(body){
        const {ctx}=this;
        const classinfo=await ctx.model.Classinfo.create(body);
        return classinfo;
  
    }
    async modify(id,body){
        const classinfo=await this.one(id);
        return await classinfo.update(body);
  
    }
    async delete(id){
        const classinfo=await this.one(id);
        return await classinfo.destroy();
  
    }
    
}

module.exports = ClassinfoService;
