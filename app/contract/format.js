module.exports = {
	// 默认接口类型
	RESULT: {
		code: {
			type: 'integer',
		},
		msg: {
			type: 'string',
		},
	},
	//    JsonResult: { //@response 200 JsonResult 操作结果，名字与相应结果对应
	//     success: { type: 'boolean' },    // 结果
	//     results: { type: 'string' }     // 服务器返回的数据
	//  },

	
	email: {
		email_no: {
			type: 'string',
			required: true,
			example: '1936979980@qq.com',
		},
	},
  
}
