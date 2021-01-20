module.exports = {
  editFirstPermission:{
    id:{
      type:'number',
      required: true,
      example:1
    },
    router_name:{
      type:'string',
      required: true,
      example:'文章管理1'
    },
    router_code:{
      type:'string',
      required: true,
      example:'/admin/article'
    },
    enable:{
      type:'number',
      required: true,
      example:1
    }
  },
  addPermission:{
    router_name:{
      type:'string',
      required: true,
      example:'文章管理1'
    },
    router_code:{
      type:'string',
      required: true,
      example:'/admin/article'
    },
    enable:{
      type:'number',
      required: true,
      example:1
    },
    pid:{
      type:'number',
      required: false,
      example:14
    }
  }
}
