const { RESULT } = require('../../util/util')

module.exports = {
  /**
   *查询全部的数据
   *
   * @param {*} base
   * @return {*} [
                  {
                    first: { id: 14, router_name: '文章管理1', enable: '0' },
                    secondData: [ [Object], [Object], [Object], [Object], [Object] ]
                  },
                ]
   */
  async INDEX(base){
    return await base.all()
  },
  /**
   * 查询某条数据
   *
   * @param {*} base
   * @param {*} id  
   * @return {*} 
   */
  async ONE(base,id) {
		return await base.one(id)
	},
  /**
   *添加一级数据
   *
   * @param {*} base
   * @param {*} data
   * @return {*} 
   */
  async ADD(base,data) {
		let result = await base.add(data)
		if (result) {
			RESULT.code = 1
			RESULT.msg = '创建成功'
			RESULT.status = 200
		} else {
			RESULT.code = 0
			RESULT.msg = '创建失败'
		}
    return RESULT
	},
  /**
   * 添加二级数据
   *
   * @param {*} base ctx.service.()
   * @param {*} id  一级的id
   * @param {*} data  添加的数据
   * @return {*} 
   */
  async ADDSECOND(base,id,data) {
    data.pid = id
		let result = await base.add(data)
		if (result) {
			RESULT.code = 1
			RESULT.msg = '创建成功'
			RESULT.status = 200
		} else {
			RESULT.code = 0
			RESULT.msg = '创建失败'
		}
    return RESULT
	},
	async EDIT(base,data) {
		const id = data.id
		const enable = data.enable
		let result = await base.one(id)
		let flagOne = await base.edit(id, data)
		if (flagOne) {
			RESULT.code = 1
			RESULT.msg = '修改成功'
			RESULT.status = 200
		} else {
			RESULT.code = 0
			RESULT.msg = '修改失败'
		}
		if (result.pid == 0) {
			let flagTwo = await base.updateSecondEnable(id, enable)
			if (flagTwo) {
				RESULT.code = 1
				RESULT.msg = '修改成功'
				RESULT.status = 200
			} else {
				RESULT.code = 0
				RESULT.msg = '修改失败'
			}
		}
    return RESULT
	},
}
