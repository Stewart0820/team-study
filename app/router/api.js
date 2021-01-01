module.exports = app => {
    const { router, controller } = app;
      //中间件
   // const auth = app.middleware.auth({ attr: 'this is aa' });

     router.post('/api/admin/login',controller.api.admin.login);
     router.get('/api/articlecate/getmobilearticlecates',controller.api.articleCat.getMobileArticleCates);//auth 
     router.post('/api/file/uploadimagebyajax',controller.api.upload.uploadImageByAjax);
     router.post('/api/file/uploadfilebyajax',controller.api.upload.uploadFileByAjax);

     router.get('/api/articles/open',controller.api.article.getOpenArticles);//auth
     router.get('/api/article/one',controller.api.article.getSingle);//auth
      //学生
     router.get('/api/student/depart',controller.api.student.findMajorAndClassinfoByDepartId);
     router.post('/api/student/login',controller.api.student.login);
     router.post('/api/student/querystudentbydepartid',controller.api.student.queryStudentsByDepartId);
     //classinfo
     router.post('/api/classinfo/queryclassinfosbydepartid',controller.api.classinfo.queryClassinfosByDepartId);
     //用户
     router.post('/api/user/login',controller.api.user.login);
     router.post('/api/user/reg',controller.api.user.reg);
     router.post('/api/user/checkemail',controller.api.user.checkRepeatEmail);


     //教师
     router.post('/api/teacher/login',controller.api.teacher.login);
     router.get('/api/querymajorandclassinfobydepartid',controller.api.student.findMajorAndClassinfoByDepartId);//auth
  };