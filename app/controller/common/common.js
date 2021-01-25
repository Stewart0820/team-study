const { RESULT } = require('../../util/util')
// 数组里面删除指定的元素的remove方法
Array.prototype.indexOf = function (val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i
	}
	return -1
}
Array.prototype.remove = function (val) {
	var index = this.indexOf(val)
	if (index > -1) {
		this.splice(index, 1)
	}
}
let getId = (function () {
	let i = 0
	return function () {
		return ++i
	}
})()
module.exports = {
 /**
  * 1：删除上一级数据类型为1,2,3类型的数据
  * 2：删除二级数据
  * @param {*} base 本身  permission
  * @param {*} upBase 上一层  role_permission
  * @param {*} id  删除的id
  * @param {*} upName role_permission修改数据的字段名
  */
 async DELETEUP(base, upBase, id,upName) {
		const pid = await base.findPid(id)
		// 需要删除的二级权限id
		let deleteId = []
    // 上一级需要更新的数组
		let ids = []
		// 父类
		if (pid[0].pid === 0) {
			let secondId = await base.findId(id)
			if (secondId.length != 0) {
				for (let i = 0; i < secondId.length; i++) {
					// 删除二级
					let flag = await base.delete(secondId[i].id)
					deleteId.push(secondId[i].id)
				}
			}
		} else {
			deleteId.push(id)
		}
		// 删除二级的role_permission删除
		let ups = await upBase.all()
		for (let i = 0; i < ups.length; i++) {
			let upId = ups[i][upName]
				.split(',')
				.map(Number)
			let length = upId.length
			for (let j = 0; j < deleteId.length; j++) {
				upId.remove(deleteId[j])
			}
			if (length != upId.length) {
				let h = getId()
				const id = ups[i].id
				ids[h - 1] = { id, upId }
			}
		}
		// 更新role_permission
		for (const value of ids) {
			let upIds = value.upId.toString()
      let data = {
        permission_id: upIds
      }
			await upBase.updateById(value.id, data)
		}
	},
}
