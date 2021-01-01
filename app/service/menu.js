'use strict';

const Service = require('egg').Service;

class MenuService extends Service {
    async all() {
        const {
            ctx
        } = this;
        const menus = await ctx.model.Menu.findAll();
        return menus;

    }
   
    async one(id) {
        const {
            ctx
        } = this;
        const menu = await ctx.model.Menu.findByPk(id);
        if (!menu) {
            ctx.throw(404, 'not found');
        }
        return menu;

    }
    async add(body) {
        const {
            ctx
        } = this;
        const menu = await ctx.model.Menu.create(body);
        return menu;

    }
    async modify(id, body) {
        const menu = await this.one(id);
        return await menu.update(body);
    }
    async delete(id) {
        const menu = await this.one(id);
        return await menu.destroy();

    }
}

module.exports = MenuService;
