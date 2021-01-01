'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
    async all() {
        const {ctx}=this;
        const admins=await ctx.model.Admin.findAll({raw:true});
        return admins;
    
    }
    async one(id){
        const {ctx}=this;
        const admin=await ctx.model.Admin.findByPk(id);
        if(!admin){
         ctx.throw(404,'not found')
        }
        return admin;
  
    }
    async add(body){
        const {ctx}=this;
        const admin=await ctx.model.Admin.create(body);
        return admin;
    }
    async modify(id,body){
       const admin=await this.one(id);
       console.log(body);
       return  await admin.update(body);
    }
    async delete(id){
       const admin=await this.one(id);
       return await admin.destroy();
    }

    async login(email,password){
        const {ctx}=this;
        let options={
            where:{
                email:email,
                password:password
            }
        }
        let admin=await ctx.model.Admin.findOne(options);
        return admin;
    }
}

module.exports = AdminService;
