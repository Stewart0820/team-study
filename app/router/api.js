module.exports = (app) => {
	const { router, controller } = app

	//用户
	router.post('/api/user/login', controller.api.user.login)
	router.post('/api/user/reg', controller.api.user.reg)

	// 邮箱
	router.post('/api/email/checkemail', controller.api.email.checkRepeatEmail)
	router.get('/api/email/email', controller.api.email.email)

	// 商品
	router.get('/api/storage/findAll', controller.api.storage.findAll)
	router.post('/api/storage/add', controller.api.storage.add)
	router.post('/api/storage/update', controller.api.storage.update)
	router.get('/api/storage/delete', controller.api.storage.delete)
}
