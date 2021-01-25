module.exports = {
	role: {
		name: {
			type: 'string',
			required: true,
			example: '班主任',
		},
		enable: {
			type: 'number',
			required: true,
			example: 1,
		},
		describe: {
			type: 'string',
			required: true,
			example: '认真严谨什么的',
		},
	},
}
