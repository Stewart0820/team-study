'use strict';

const Service = require('egg').Service;

class CompetitionService extends Service {
    async all() {
            const { ctx } = this;
            const competitions = await ctx.model.Competition.findAll();
            return competitions;
        }
        /**
         * 通过competition字段，查询
         * @param {*} fields 字段
         */
    async findCompetitionsWithFields(fields) {

        const { ctx } = this;
        fields = fields | ['id', 'competiton_name', 'competiton_type', 'competiton_object', 'competiton_url', 'competiton_period', 'competiton_org', 'status', 'competiton_logo']
        let options = {
            attributes: fields,
        }
        const competitions = await ctx.model.Competition.findAll(options);
        return competitions;
    }
    async one(id) {
        const { ctx } = this;
        const competition = await ctx.model.Competition.findByPk(id);
        if (!competition) {
            ctx.throw(404, 'not found');
        }
        return competition;
    }
    async add(body) {
        const { ctx } = this;
        const competition = await ctx.model.Competition.create(body);
        return competition;

    }
    async modify(id, body) {
        const competition = await this.one(id);
        return await competition.update(body);

    }
    async delete(id) {
        const competition = await this.one(id);
        return await competition.destroy();

    }
}

module.exports = CompetitionService;