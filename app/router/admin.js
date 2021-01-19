module.exports = (app) => {
	const { router, controller } = app

	
  
	//用户
	router.get('/admin/permission', controller.admin.permission.index)
	
}
