'use strict';

const Service = require('egg').Service;

class SystemModuleService extends Service {
  /**
   * 获取一级菜单
   */
  async findTopByParentId() {
    const {
      ctx
    } = this;
    //const Op=this.app.Sequelize.Op;//操作符
    const options = {
      attributes: ['mod_id', 'title', 'url', 'icon'], //查询字段
      //查询条件
      where: {
        parent_id: 0,
        visible: 1,
        // mod_id:{
        //    [Op.in]:[1,2,3]
        // }
      },
      order: [
        ['orderby'] //排序
      ]
    }
    const tops = await ctx.model.SystemModule.findAll(options);

    return tops;
  }
  /**
   * 通过父编号获取子级菜单
   * @param {*} parentId 父编号
   */
  async findChildrenByParentId(parentId) {
    const {
      ctx
    } = this;
    // const Op=this.app.Sequelize.Op;//操作符
    const options = {
      attributes: ['mod_id', 'title', 'url', 'icon'], //查询字段
      //查询条件
      where: {
        parent_id: parentId,
        visible: 1,
        //  mod_id:{
        //     [Op.in]:[1,2,3]
        //  }
      },
      order: [
        ['orderby'] //排序
      ]
    }
    let children = await ctx.model.SystemModule.findAll(options);
    return children;

  }

  /**
   * 通过parent_id获取模块信息
   * @param {*} parent_id 父编号
   * @field fields 查询列集合
   * @return 模块集合
   */
  async getChildModulesBylevel(level, parent_id, fields) {
    const {
      ctx
    } = this;
    fields = fields || ['mod_id', 'module', 'level', 'title', 'url', 'icon', 'visible', 'parent_id', 'orderby'];
    let options = {
      attributes: fields, //查询字段
      //查询条件
      where: {
        level: level,
        parent_id: parent_id,
        visible: 1
      },
      order: [
        ['orderby'] //排序
      ]
    }
    let modules = await ctx.model.SystemModule.findAll(options)

    return modules;
  }
  async getMenus(id) {
    let leftmenus = [];
    const menus = await this.findChildrenByParentId(id);
    if (menus) {
      for (const index in menus) {
        let menu = menus[index];
        const submenus = await this.findChildrenByParentId(menu.mod_id);
        leftmenus[index] = {
          menu,
          submenus
        }
      }
    }

    return leftmenus;
  }
  //
  async getModuleParentId(parent_id) {
    const {
      ctx
    } = this;
   
   let module=await this.one(parent_id);
   return module
  }

  async modify(id,body){
    let module=await this.one(id);
    return await module.update(body)

  }
  async add(body){
  const {ctx}=this;
  let module=await ctx.model.SystemModule.create(body);
  return module;
    
  }
  async one(id){
    const {ctx}=this;
    // let module=await ctx.model.SystemModule.findOne({where:{mod_id:id}});
    let module=await ctx.model.SystemModule.findByPk(id);
    if(!module){
       ctx.throw(404,'not found');
    }
    return module;
  }
  async delete(id){
    let module=await this.one(id);
    return await module.destroy()
  }
}



module.exports = SystemModuleService;