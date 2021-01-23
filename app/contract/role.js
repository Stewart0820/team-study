module.exports = {
  editRole:{
    id:{
      type:'number',
      required: true,
      example:1
    },
    name:{
      type:'string',
      required: true,
      example:'班主任'
    },
    describe:{
      type:'string',
      required: true,
      example:'认真严谨什么的'
    },
    enable:{
      type:'number',
      required: true,
      example:1
    }
  },
  
}
