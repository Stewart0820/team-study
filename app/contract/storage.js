module.exports = {
	add_storage: {
		storage_name: {
			type: 'string',
			required: true,
			example: '电脑',
		},
		storage_origin: {
			type: 'string',
			required: true,
			example: '商品产地',
		},
		storage_status: {
			type: 'number',
			required: true,
			example: 0,
		},
		storage_number: {
			type: 'number',
			required: true,
			example: 20,
		},
		unit: {
			type: 'number',
			required: true,
			example: 0,
		},
		storage_img: {
			type: 'file',
			required: false,
			example: '文件链接',
		},
		storage_model: {
			type: 'string',
			required: true,
			example: '商品型号',
		},
    user_id: {
			type: 'number',
			required: true,
			example: '1',
		},
	},
  update_storage:{
    id: {
			type: 'number',
			required: true,
			example: 1,
		},
    
    storage_name: {
			type: 'string',
			required: true,
			example: '电脑',
		},
		storage_origin: {
			type: 'string',
			required: true,
			example: '商品产地',
		},
		storage_status: {
			type: 'number',
			required: true,
			example: 0,
		},
		storage_number: {
			type: 'number',
			required: true,
			example: 20,
		},
		unit: {
			type: 'number',
			required: true,
			example: 0,
		},
		storage_img: {
			type: 'file',
			required: false,
			example: '文件链接',
		},
		storage_model: {
			type: 'string',
			required: true,
			example: '商品型号',
		},
    user_id: {
			type: 'number',
			required: true,
			example: '1',
		},
    

	},
  
}
