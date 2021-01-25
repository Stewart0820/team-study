module.exports = (app) => {
	const { router, controller } = app

	//权限
	router.get('/admin/permission', controller.admin.permission.index)
	router.get('/admin/permission/one', controller.admin.permission.one)
	router.post('/admin/permission/edit', controller.admin.permission.edit)
	router.post('/admin/permission/add', controller.admin.permission.add)
	router.post('/admin/permission/addSecond', controller.admin.permission.addSecond)
	router.get('/admin/permission/delete', controller.admin.permission.delete)
	router.post('/admin/permission/editText', controller.admin.permission.editText)

	// 角色
	router.get('/admin/role', controller.admin.role.index)
	router.get('/admin/role/one', controller.admin.role.one)

}
