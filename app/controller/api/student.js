'use strict';
/**
 * @controller 学生数据接口
 */
const Controller = require('egg').Controller;

const {
    RESULT
} = require('../../util/util')

class StudentController extends Controller {

    /**
     * @summary 通过学生部门编号获取专业和班级
     * @description 通过学生部门编号获取专业和班级
     * @router get /api/student/depart
     * @request query integer depart_id
     * @response 200 RESULT
     */
    async findMajorAndClassinfoByDepartId() {
        const {
            ctx
        } = this;
        const {
            depart_id
        } = ctx.query;
        // console.log(depart_id);
        //获取专业和班级
        if (depart_id) {
            let majors = await ctx.service.major.findMajorsByDepartId(depart_id);
            let classinfos = await ctx.service.classinfo.findClassinfosByDepartId(depart_id);
            let data = {
                majors,
                classinfos
            };
            RESULT.code = 1;
            RESULT.msg = '数据获取成功';
            RESULT.data = data;
        } else {
            RESULT.code = 0;
            RESULT.msg = '数据获取失败';
        }

        ctx.body = RESULT;

    }

    /**
     * @summary 学生登录
     * @description 学生登录
     * @router post /api/student/login
     * @request body student
     * @response 200 RESULT
     */
    async login() {
        const {
            ctx
        } = this;
        const {
            student_no,
            password
        } = ctx.request.body;
        let student = await ctx.service.student.login(student_no, password);
        if (student) {

            RESULT.code = 1;
            RESULT.msg = '登录成功';
            RESULT.data = student;
        } else {
            RESULT.code = 0;
            RESULT.msg = '登录失败,请检查用户名或者密码';
        }
        ctx.body = RESULT;
    }
    /**
     * @summary 通过部门获取数据
     * @description 通过部门获取数据
     * @router post /api/student/querystudentbydepartid
     * @request body integer depart_id
     * @response 200 RESULT
     */
    async queryStudentsByDepartId() {
        const {
            ctx
        } = this;
        const {
            depart_id
        } = ctx.request.body;
        if (depart_id) {
            let students = await ctx.service.student.findStudentByDepartId(depart_id);

            if (students) {
                RESULT.code = 1;
                RESULT.msg = '获取数据';
                RESULT.data = students;
            } else {
                RESULT.code = 0;
                RESULT.msg = '没有数据';
            }

        } else {
            RESULT.code = 0;
            RESULT.msg = '传参不正确,请重试';
        }

        ctx.body = RESULT;
    }
    /**
     * @summary 通过班级获取学生数据
     * @description 通过班级获取学生数据
     * @router post /api/student/querystudentsbyclassmateid
     * @request body student
     * @response 200 RESULT
     */
    async queryStudentsByClassmateId() {
        const {
            ctx
        } = this;
        const {
            classmate_id
        } = ctx.request.body;
        if (depart_id) {
            let students = await ctx.service.student.findStudentByClassmateId(classmate_id);
            if (students) {
                RESULT.code = 1;
                RESULT.msg = '获取数据';
                RESULT.data = students;
            } else {
                RESULT.code = 0;
                RESULT.msg = '没有数据';
            }

        } else {
            RESULT.code = 0;
            RESULT.msg = '传参不正确,请重试';
        }

        ctx.body = RESULT;
    }
}

module.exports = StudentController;