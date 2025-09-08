import commanderLine from './utils/helper.js';
import path from 'node:path'
import compressFile from './utils/compressFile.js'
import server from './utils/ssh.js'
import uploadFile from './utils/uploadFile.js'
import handleCommand from './utils/handleCommand.js'
import build from './utils/build.js'
//入口函数
const main = async () => {
    const config = await commanderLine();
    const local = path.resolve(process.cwd(), config.targetFile)
    build(config.targetDir, config.buildCommand)
    await compressFile(config.targetDir, local)
    await server.connectServer(config)
    await uploadFile(server.ssh, config, local)
    await handleCommand(server.ssh, `unzip -o ${config.targetFile} -d ./`, config.deployDir) //解压.
    await server.ssh.dispose() //释放连接
    console.log('部署成功','在主机'+config.ssh.host+'的'+config.deployDir+'目录下')
}


main()