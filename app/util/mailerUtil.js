'use strict'
var smtpTransport = require('nodemailer-smtp-transport')
var nodemailer = require('nodemailer')
const config = {
	host: 'smtp.qq.com', // 主机
	secure: true, // 使用 SSL
	secureConnection: true, // 使用 SSL
	port: 465, // SMTP 端口
	auth: {
		user: '1939136076@qq.com', // 账号
		pass: 'iffrsabjjbqoibja', // 密码
	},
}
// 开启一个 SMTP 连接池

const transport = nodemailer.createTransport(smtpTransport(config))
module.exports = {
	sendTextMail(mail) {
		// 发送邮件
		transport.sendMail(mail, function (error, response) {
			if (error) {
				console.error(error)
			} else {
				console.log(response)
			}
			transport.close() // 如果没用，关闭连接池
		})
	},
	// sendHtmlMail(){

	// }
	// sendMailWithAttachment(){

	// }
}
