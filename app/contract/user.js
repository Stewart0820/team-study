module.exports = {
	user_reg: {
		email: {
			type: 'string',
			required: true,
			example: 'sukura13123133927@qq.com',
		},
		password: {
			type: 'string',
			required: true,
			example: 'Aa123456',
		},
    repassword:{
      type: 'string',
			required: true,
			example: 'Aa123456',
    },
    code:{
      type:'number',
      require: true,
      example: 123456
    }
	},
  user_login: {
		email: {
			type: 'string',
			required: true,
			example: 'sukura13123133927@qq.com',
		},
		password: {
			type: 'string',
			required: true,
			example: 'Aa123456',
		},
    
	},
}
