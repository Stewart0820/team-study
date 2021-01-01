'use strict';

const Service = require('egg').Service;

class DepartmentService extends Service {
  async all() {
      const {ctx} =this;
      let departs= await ctx.model.Department.findAll();
      return departs;
  }
  

  async one(id){
    const {ctx} =this;
      let depart =await this.ctx.model.Department.findByPk(id)
      if(!depart){
        ctx.status=404;
        ctx.throw("not found")
      }
      return depart;
  }
  async add(body){
    const {ctx} =this;
    let depart=await ctx.model.Department.create(body);
    return depart;

  }
  async modify(id,body){
     let depart=await this.one(id);
     return await depart.update(body);
  }
  async delete(id){
    let depart=await this.one(id);

    return await depart.destroy();
  }

     /**
   * 
   * @param {*} condition 查询条件 {id:id}
   * @param {*} fields 查询字段 默认 'id','depart_name','depart_code'
   * @param {*} orders 查询字段 可以为空
   */
  async findDeparts(fields){
    const {ctx}=this;
    fields=fields||['id','depart_name','depart_code'];
    let options={}
    options.attributes=fields;
    options.raw=true;
    let departs=await ctx.model.Department.findAll(options)

    return departs;
  }
  /**
   * 查询所有的id和name
   *
   * @return {*} 
   * @memberof DepartmentService
   */
  async findDepartNameId(){
    const {ctx}=this;
    let departs=await ctx.model.Department.findAll({
      attributes:['id','depart_name']
    })
    return departs;
  }

  
}

module.exports = DepartmentService;
