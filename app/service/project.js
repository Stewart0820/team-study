'use strict';

const Service = require('egg').Service;

class ProjectService extends Service {
    async all() {
      const {ctx}=this;
      let projects=await ctx.model.Project.all({raw:true});
      return projects;
    }

    async one(id){
        const {ctx}=this;
        const project=await ctx.model.Project.findByPk(id);
        if(!project){
            ctx.throw(404,'not found');
        }
        return project;
    }
    async add(body){
        const {ctx}=this;
        const project=await ctx.model.Project.create(body);
        return project;
    }
    async modify(id,body){
        const project=await this.one(id);
        return await project.update(body);
    }
    async delete(id){
        const project=await this.one(id);
        return await project.destroy(); 
    }
    /**
     * 通过负责人编号获得创建的项目
     * @param {*} leader 负责人编号，也就是教师的编号
     */
    async findProjectByLeader(leader){
        const {ctx}=this;
         let options={
             attributes:{exclude:['project_desc']},
             where:{
                leader:leader
             },
             raw:true,
             order:[
                 ['update_time','DESC']
             ]
         }
         let projects=await ctx.model.Project.findAll(options);
         return projects;
    }
    async findProjectsByEnroll(enroll=1){
        const {ctx}=this;
        let options={
            attributes:{exclude:['project_desc']},
            where:{
                enroll:enroll
            },
            raw:true,
            order:[
                ['update_time','DESC']
            ]
        }
        let projects=await ctx.model.Project.findAll(options);
        return projects;

    }
    /**
     *获取无富文本的项目
     * @returns 无文本的项目
     * @memberof ProjectService
     */
    async findAllNoBlob(){
        const {ctx}=this;
        let options={
            attributes:{exclude:['project_desc']},
            raw:true,
            order:[
                ['update_time','DESC']
            ]
        }
        let projects=await ctx.model.Project.findAll(options);
        return projects;

        
    }
    async findProjectByStudentId(studentId){
        const {ctx}=this;
        let student_have_projects=[];
        let projects=await this.findAllNoBlob();
        for(let i=0;i<projects.length;i++){
            if(projects[i].students){
                let studentIds=projects[i].students.split(',');
                let students=await ctx.service.student.findStudentsByIds(studentIds);
                let bool =studentIds.find((id)=>id=studentId);
                if(bool){
                    projects[i].students=students;
                    student_have_projects.push(projects[i]);
                }
            }
        }
        return student_have_projects.length>0 ? student_have_projects:0;

    }
    /**
     * 根据条件查询项目
     * @param {*} where {id:id}
     */
    async findProjects(where){

        const {ctx}=this;
        let options={
            attributes:{exclude:['project_desc']},
            where:where,
            raw:true,
            order:[
                ['update_time','DESC']
            ]
        }
        let projects=await ctx.model.Project.findAll(options);
        return projects;
    }


}

module.exports = ProjectService;
