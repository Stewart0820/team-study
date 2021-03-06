'use strict';
const fs = require('mz/fs');
const path = require('path');
const Controller = require('egg').Controller;
const pump = require('mz-modules/pump');
const {
  uuid,
  checkFileExtname,
  checkImageExtname,
  RESULT
} = require('../../util/util')
var Minio = require('minio')


class UploadController extends Controller {

  async uploadImageByAjax() {
    const {
      ctx
    } = this;
    const file = ctx.request.files[0];
    if (!file) {
      RESULT.code = 0;
      RESULT.msg = '图片没有选中';
      ctx.body = RESULT
      return
    }
    const filename = encodeURIComponent(ctx.request.body.name) + path.extname(file.filename).toLowerCase();
    let extname = filename.substring(filename.lastIndexOf('.'), filename.length);

    if (!checkImageExtname(extname)) {
      RESULT.code = 0;
      RESULT.msg = '图片扩展名错误';
      ctx.body = RESULT
    } else {
      let newfilename = uuid().toLowerCase().replace(/-/g, '') + extname;
      const targetPath = path.join(this.config.baseDir, 'app/public/upload', newfilename);
      const source = fs.createReadStream(file.filepath);
      const target = fs.createWriteStream(targetPath);
      try {
        await pump(source, target);
      } finally {
        // delete those request tmp files

        await ctx.cleanupRequestFiles();
        RESULT.code = 0;
        RESULT.msg = '图片上传不成功';
        ctx.body = RESULT
      }
      RESULT.code = 1;
      RESULT.msg = '图片上传成功';
      RESULT.url = '/public/upload/' + newfilename
      ctx.body = RESULT;
    }
  }

  async uploadFileByAjax() {
    const {
      ctx
    } = this;
    const file = ctx.request.files[0];
    if (!file) {
      RESULT.code = 0;
      RESULT.msg = '文件没有上传';
      ctx.body = RESULT
      return
    }
    const filename = encodeURIComponent(ctx.request.body.name) + path.extname(file.filename).toLowerCase();
    let extname = filename.substring(filename.lastIndexOf('.'), filename.length);
    if (!checkFileExtname(extname)) {
      RESULT.code = 0;
      RESULT.msg = '文件扩展名错误';
      ctx.body = RESULT
    } else {
      let newfilename = uuid().toLowerCase().replace(/-/g, '') + extname;
      const targetPath = path.join(this.config.baseDir, 'app/public/upload', newfilename);
      const source = fs.createReadStream(file.filepath);
      const target = fs.createWriteStream(targetPath);
      try {
        await pump(source, target);
      } finally {
        // delete those request tmp files

        await ctx.cleanupRequestFiles();
        RESULT.code = 0;
        RESULT.msg = '文件上传不成功';
        ctx.body = RESULT
      }
      RESULT.code = 1;
      RESULT.msg = '文件上传成功';
      RESULT.url = '/public/upload/' + newfilename
      ctx.body = RESULT;
    }
  }
 

}

module.exports = UploadController;