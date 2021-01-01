'use strict';

// 导入egg的Service服务
const Service = require('egg').Service;

// 建立communityActivtiyService类，继承于Service
class communityAtivtiyService extends Service {
    // 创建一个搜索全部的方法
    async all() {
            const { ctx } = this;
            //  c查找modal中的communityActivtiy的所有数据
            const communityActivtiy = await ctx.model.CommunityActivtiy.findAll();
            // 将查找的信息返回
            return communityActivtiy;
        }
        /**
         * 通过communityActivtiy字段，查询
         * @param {*} fields 字段
         */
        // 创建了一个条件搜索方法
        // fields要为model中的字段
    async findcCmmunityActivtiyWithFields(fields) {

        const { ctx } = this;
        fields = fields | ['id', 'title', 'content', 'starttime', ' endtime', 'status', 'chager', 'attentment', 'c_id', 'type']
            // 设置查找的字段

        let options = {
                attributes: fields,
            }
            // console.log("测试options的输出值", options);
            // 按照options查找
        const communityActivtiy = await ctx.model.CommunityActivtiy.findAll(options);
        // 返回查找的数据
        return communityActivtiy;
    }

    // 按id查找
    async one(id) {
        const { ctx } = this;
        // 查找的方法
        const communityActivtiy = await ctx.model.CommunityActivtiy.findByPk(id);
        if (!communityActivtiy) {
            ctx.throw(404, 'not found');
        }
        // 返回信息
        return communityActivtiy;
    }

    // 创建新信息
    async add(body) {
            const { ctx } = this;
            const communityActivtiy = await ctx.model.CommunityActivtiy.create(body);
            return communityActivtiy;

        }
        // 信息更新
    async modify(id, body) {
            // 找到目的信息
            const communityActivtiy = await this.one(id);
            return await communityActivtiy.update(body);

        }
        // 信息删除
    async delete(id) {
            // 找到目的信息
            const communityActivtiy = await this.one(id);
            return await communityActivtiy.destroy();

        }
        //  模糊搜索

    async selectCmmunityActivtiyWithFields(options) {
        const { ctx } = this;

        // console.log("selectCmmunityActivtiyWithFields启动");

        // console.log("搜索关键字", options);
        // options.where.title[Op.like] = "%test%";

        // options.where = {}
        // console.log("搜索关键字", options);

        const CommunityActivtiy = await ctx.model.CommunityActivtiy.findAll(options);

        return await CommunityActivtiy;
    }
}
//  返回全局共享
module.exports = communityAtivtiyService;