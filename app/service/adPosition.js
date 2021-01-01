'use strict';

const Service = require('egg').Service;

class AdPositionService extends Service {
  async all() {
      const {ctx} =this;
      return await ctx.model.AdPosition.findAll();
  }
  async add(adPosition){
    const {ctx} =this;
    adPosition=ctx.model.AdPosition.create(adPosition);

    return adPosition;
  }
  async one(id){
    const {ctx} =this;
    let adPosition=await ctx.model.AdPosition.findByPk(id);
    if(!adPosition){
      ctx.status=404;
      ctx.throw("not found")
    }
    return adPosition;
  }
  async modify(id,body){
     const adPosition=await this.one(id)
     const res=await adPosition.update(body);
     return res;
  }
  async delete(id){
    const adPosition=await this.one(id);
    return await adPosition.destroy()
  }
  async findAdPositionByIsOpen(){
    
    const {ctx} =this;
    //查询条件
    let conditons = {
      where:{
        is_open:0
      }
    };
    //定义获取表的字段
    let attributes={
      attributes:['position_id','position_name']
    }
    const adPostions=await ctx.model.AdPosition.findAll({attributes,conditons});
    return adPostions;


  }
}

module.exports = AdPositionService;
