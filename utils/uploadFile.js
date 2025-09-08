async function uploadFile(ssh,config,local){
    await ssh.putFile(local, config.deployDir+'/'+config.targetFile).then(function(){
      console.log('上传成功')
    },function(err){
      console.log('上传失败',err)
    })
}

export default uploadFile;
