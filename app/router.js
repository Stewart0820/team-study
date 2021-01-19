'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  //api接口
  require('./router/api')(app);
  require('./router/admin')(app);
};
