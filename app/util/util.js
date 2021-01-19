'use strict'
module.exports = {
	ERROR: {
		code: 0,
		msg: 'failed',
	},
	SUCCESS: {
		code: 1,
		msg: 'success',
	},
	RESULT: {
		code: 0,
		msg: 'result',
	},
	unique(arr) {
		return arr.filter(function (item, index, arr) {
			return arr.indexOf(item) === index
		})
	},
	// 数组去重的方法
	unique(createList) {
		return Array.from(new Set(createList))
	},
	/**
	 * 生成六位随机数
	 *
	 * @return {*}
	 */
	createSixNum() {
		var Num = ''
		for (var i = 0; i < 6; i++) {
			Num += Math.floor(Math.random() * 10)
		}
		return Num
	},
	uuid() {
		var withLine = true //带不带横线
		var len = 36 //长度为36
		var radix = 16 //16进制
		var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
			''
		)
		var uuid = [],
			i
		radix = radix || chars.length
		if (withLine) {
			var r
			uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
			uuid[14] = '4'
			for (i = 0; i < len; i++) {
				if (!uuid[i]) {
					r = 0 | (Math.random() * 16)
					uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
				}
			}
		} else {
			for (i = 0; i < len; i++) {
				uuid[i] = chars[0 | (Math.random() * radix)]
			}
		}
		return uuid.join('')
	},

	/**
	 * 获取系统时间时间戳
	 * @param {*} date 时间
	 */
	getTimeStamp() {
		return new Date().getTime().toString().substring(0, 10)
	},
	/**
	 * 时间戳转为字符串
	 * @param {*} timeStamp
	 */
	changeTimeStamp(timeStamp) {
		return new Date(timeStamp * 1000).toLocaleString()
	},
	/**
	 * 检查文件图片的的扩展名
	 * @param {*} extname 扩展名
	 * @param {*} extnames 图片扩展名集合
	 */
	checkImageExtname(extname, extnames) {
		let result = false
		extnames = extnames || ['.jpg', '.png', '.jpeg', '.gif']
		extnames.forEach((element) => {
			console.log(element)
			if (element == extname) {
				result = true
			}
		})
		return result
	},
	/**
	 *
	 * @param {*} extname 文件的扩展名
	 * @param {*} extnames 文件扩展名集合
	 */
	checkFileExtname(extname, extnames) {
		let result = false
		extnames = extnames || [
			'.pdf',
			'.zip',
			'.docx',
			'.doc',
			'.xls',
			'.xlsx',
		]

		extnames.forEach((element) => {
			if (element == extname) {
				result = true
			}
		})
		return result
	},
	/**
	 * 通过正则表达式获取图片标签集合
	 * @param {*} content 富文本
	 */
	extractImages(content) {
		let reg = /<IMG src=\"([^\"]*?)\">/gi
		let images = content.match(reg)
		if (images && images.length > 0) {
			return images
		} else {
			return images
		}
	},

	/**
	 *字符串去除所有空格
	 */
	trim(a) {
		if (typeof a == 'string') {
			return a.replace(/\s+/, '')
		} else {
			return a
		}
	},
	/**
	 *字符串判空
	 */
	isEmpty(a) {
		var b = this.trim(a)

		if (typeof a == 'string' && b) {
			return false
		} else {
			return true
		}
	},

	/**
	 *数字判空,如果不是数字类型，则应首先进行类型转换
	 */
	isNull(a) {
		if (typeof a == 'number' && a != NaN) {
			return false
		} else {
			return true
		}
	},
	/**
	 *数组判空,数组是对象的一种
	 */
	isEmptyArray(a) {
		if (typeof a == 'object' && a != null && a.length > 0) {
			return false
		} else {
			return true
		}
	},
	/**
	 *对象判空
	 */
	isEmptyObj(a) {
		if (typeof a == 'object' && a != null) {
			return false
		} else {
			return true
		}
	},
	/**
	 * 不分类型,不考虑传入值为对象的情况
	 */
	isNullEmpty(a) {
		if (typeof a == 'string') {
			if (typeof a == 'string') {
				return false
			} else {
				return true
			}
		} else if (typeof a == 'number' && a != NaN) {
			return false
		} else {
			return true
		}
	},
}
