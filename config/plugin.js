'use strict';

/** @type Egg.EggPlugin */
module.exports = {

  sequelize : {
    enable: true,
    package: 'egg-sequelize'
  },
  //api ui插件
  swaggerdoc:{
    enable: true,   // 是否启用。
    package: 'egg-swagger-doc', // 指定包名称。
  },
  //跨域插件
  cors :{
    enable: true,
    package: 'egg-cors',
  },
};
