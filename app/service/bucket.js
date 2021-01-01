'use strict';

const Service = require('egg').Service;
const Minio = require('minio');
class BucketService extends Service {
    async all() {
        const {
            ctx
        } = this;
        const buckets = await ctx.model.Bucket.findAll();
        return buckets;

    }
   
    async one(id) {
        const {
            ctx
        } = this;
        const bucket = await ctx.model.Bucket.findByPk(id);
        if (!bucket) {
            ctx.throw(404, 'not found');
        }
        return bucket;

    }
    /**
     *添加bucket
     *
     * @param {*} body
     * @returns
     * @memberof BucketService
     */
    async add(body) {
        //添加到数据库
        //添加bucket到minio
        const {app,ctx}=this;
        let minioClient = new Minio.Client(app.config.minio); 


        const bucket = await ctx.model.Bucket.create(body);

        return bucket;

    }
    async modify(id, body) {
        const bucket = await this.one(id);
        return await bucket.update(body);
    }
    async delete(id) {
        const bucket = await this.one(id);
        return await bucket.destroy();

    }
}

module.exports = BucketService;
