'use strict';

const Service = require('egg').Service;

class Delivery_docService extends Service {
    async all() {
        const {ctx}=this;
        const delivery_docs=await ctx.model.DeliveryDoc.findAll();
        return delivery_docs;
    
    }
    async one(id){
        const {ctx}=this;
        const delivery_doc=await ctx.model.DeliveryDoc.findByPk(id);
        return delivery_doc;
  
    }
    async add(body){
        const {ctx}=this;
        const delivery_doc=await ctx.model.DeliveryDoc.ceate(body);
        return delivery_doc;
  
    }
    async modify(id,body){
        const delivery_doc=await this.one(id);
        return await delivery_doc.update(body);
  
    }
    async delete(id){
        const delivery_doc=await this.one(id);
        return await delivery_doc.destroy();
  
    }
}

module.exports = Delivery_docService;
