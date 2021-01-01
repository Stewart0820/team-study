'use strict';

const Service = require('egg').Service;
const crypto = require('crypto');
class UsersService extends Service {
    async all() {
        const {
            ctx
        } = this;
        const users = await ctx.model.Users.findAll({raw:true});
        return users;

    }
    async one(id) {
        const {
            ctx
        } = this;
        const user = await ctx.model.Users.findByPk(id);
        if (!user) {
            ctx.throw(404, 'not found');
        }
        return user;
    }
    async add(body) {
        const {
            ctx
        } = this;
        const user = await ctx.model.Users.create(body);
        return user;
    }
    async modify(id, body) {
        const user = await this.one(id);
        return await user.update(body);

    }
    async delete(id) {
        const user = await this.one(id);
        return await user.destroy();
    }

    async login(email, password) {
        const {
            ctx,app
        } = this;
        let salt = app.config.salt;
        password = crypto.createHmac('sha256', salt).update(password).digest('hex')
        let options = {
            attributes: ['user_id', 'email', 'reg_time', 'last_login', 'last_ip'],
            where: {
                email: email,
                password: password
            }
        }
        const user = await ctx.model.Users.findOne(options);
        return user;

    }
    /**
     * 检查email是否重复
     */
    async findUserByEmail(email) {
        const {
            ctx
        } = this;
        let options = {
            where: {
                email: email
            }
        }
        let user = await ctx.model.Users.findOne(options);
        return user;
    }
    /**
        users首页的数据
     */
    async selectUsersData() {
        const {
            ctx
        } = this;
        const users = await ctx.model.Users.findAll({
            attributes: ['id'
                        ,'nickname'
                        ,'email'
                        ,'sex'
                        ,'mobile'
                        ,'qq'], 
        });
        return users;

    }
    /**
     * 查询password
     *
     * @param {*} email  条件
     * @return {*} 
     * @memberof UsersService
     */
    async selectPassword(email) {
        const {
            ctx
        } = this;
        const users = await ctx.model.Users.findAll({
            attributes: ['password'],
            where:{
              email:email
            }
        });
        return users;

    }
    /**
     *根据email查询所有的数据
     *
     * @param {*} email
     * @return {*} 
     * @memberof UsersService
     */
    async selectAllData(email) {
        const {
            ctx
        } = this;
        const users = await ctx.model.Users.findAll({
            where:{
              email:email
            }
        });
        return users;

    }
    /**
     * 根据email查询id
     *
     * @param {*} email
     * @return {*} 
     * @memberof UsersService
     */
    async selectId(email) {
        const {
            ctx
        } = this;
        const users = await ctx.model.Users.findAll({
            attributes: ['id'],
            where:{
              email:email
            }
        });
        return users;

    }
    /**
     * 根据major_id去查询学生的id和name
     *
     * @param {*} majorId
     * @return {*} 
     * @memberof UsersService
     */
    async findStudentsNameId(majorId) {
		const { ctx } = this
		const result = await ctx.model.Users.findAll({
			attributes: ['id', 'name'],
			where: {
				major_id: majorId,
        teacher_no: null
			},
		})
		return result
	}
  /**
   *根据depart_id去查询老师的id和name
   *
   * @param {*}depart_id
   * @return {*} 
   * @memberof UsersService
   */
  async findTeachersNameId(id) {
		const { ctx } = this
		const result = await ctx.model.Users.findAll({
			attributes: ['id', 'name'],
			where: {
        student_no: null,
        depart_id:id
			},
		})
		return result
	}
}

module.exports = UsersService;