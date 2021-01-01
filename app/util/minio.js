const Minio =require('minio');
let minioClient=new Minio.Client({
    endPoint:'47.106.220.247',
    port:9000,
    useSSL:false,
    accessKey:'wuzongbo_9688@126.com',
    secretKey:'Lyw751130'
})
module.exports={
    minioClient
}