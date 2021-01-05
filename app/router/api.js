module.exports = (app) => {
	const { router, controller } = app

	
  
	//用户
	router.post('/api/user/login', controller.api.user.login)
	router.post('/api/user/reg', controller.api.user.reg)

	
	// 邮箱 
	router.post('/api/email/checkemail', controller.api.email.checkRepeatEmail)
  router.get('/api/email/email',controller.api.email.email)
}
