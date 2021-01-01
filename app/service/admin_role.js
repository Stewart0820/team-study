'use strict';

const Service = require('egg').Service;

class Admin_roleService extends Service {
    async all() {
        const {ctx}=this;
        const admin_roles=await ctx.model.AdminRole.findAll();
        return admin_roles;
    }
    async one(id){
        const {ctx}=this;
        const admin_role=await ctx.model.AdminRole.findByPk(id);
        if(!admin_role){
           ctx.throw(404,'not found')
        }
        return admin_role;
    }
    async add(body){
        const {ctx}=this;
        const admin_role=await ctx.model.AdminRole.create(body);
        return admin_role;
    }
    async modify(id,body){

        const admin_role= await this.one(id);
        return await admin_role.update(body);
  
    }
    async delete(id){
        const admin_role=await this.one(id);
        return await admin_role.destroy();
  
    }
}

module.exports = Admin_roleService;
