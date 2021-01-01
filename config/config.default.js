/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = (exports = {})

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1609383545509_3803'

	// add your middleware config here
	config.middleware = []

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	}
	config.sequelize = {
		dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
		database: 'shop',
		host: '47.106.220.247',
		port: 3306,
		username: 'root',
		password: 'wuzongbo751130',
		timezone: '+08:00', // 保存为本地时区
		// delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
		// baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
		// exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
		// more sequelize options
		define: {
		    freezeTableName: true, // 阻止数据表名变为复数
		    timestamps: false // 阻止model生成createAt和updateAt字段
		}
	}
	config.swaggerdoc = {
		dirScanner: './app/controller/api', // 配置自动扫描的控制器路径。
		// 接口文档的标题，描述或其它。
		apiInfo: {
			title: '双创教育中心服务接口', // 接口文档的标题。
			description: '数据接口', // 接口文档描述。
			version: '1.0.0', // 接口文档版本。
		},
		schemes: ['http', 'https'], // 配置支持的协议。
		consumes: ['application/json'], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
		produces: ['application/json'], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回。
		securityDefinitions: {
			// 配置接口安全授权方式。
			// apikey: {
			//   type: 'apiKey',
			//   name: 'clientkey',
			//   in: 'header',
			// },
			// oauth2: {
			//   type: 'oauth2',
			//   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
			//   flow: 'password',
			//   scopes: {
			//     'write:access_token': 'write access_token',
			//     'read:access_token': 'read access_token',
			//   },
			// },
		},
		enableSecurity: false, // 是否启用授权，默认 false（不启用）。
		// enableValidate: true,    // 是否启用参数校验，默认 true（启用）。
		routerMap: true, // 是否启用自动生成路由，默认 true (启用)。
		enable: true, // 默认 true (启用)。
	}
  config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };
    config.multipart = {
            mode: 'file',
            whitelist: [
                '.jpg', '.jpeg', // image/jpeg
                '.png', // image/png, image/x-png
                '.gif', // image/gif
                '.bmp', // image/bmp
                '.wbmp', // image/vnd.wap.wbmp
                '.webp',
                '.psd',
                '.pdf',
                '.doc',
                '.docx',
                'xls',
                'xlsx',
                // tar
                '.zip',
                '.gz', '.tgz', '.gzip',
                // video
                '.mp3',
                '.mp4',
                '.avi',
            ], //上传文件的扩展名
            fileSize: '10mb', //上传文件大小
            fileExtensions: [

                ] // 自定义额外扩展
        }
        //安全
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        // domainWhiteList: ['http://127.0.0.1:7001']
    };
	return {
		...config,
		...userConfig,
	}
}
