//配置文件
//因为可能是集群部署
const config = [
    {
        name:'your_name',
        value:'1', //这个值需要唯一 inquirer 会根据这个值来选择
        ssh: {
            host: 'your_host', //远程服务器地址
            port: 22, //远程服务器端口 ssh默认的端口
            username: 'your_username', //远程服务器用户名
            password: 'your_password', //远程服务器密码
        },
        targetDir:'your_target_dir', //本地文件路径
        targetFile:'dist.zip', //本地文件名
        deployDir:'/usr/share/nginx/html/electron_car', //远程服务器部署路径
        releaseDir:'web', //dist会解压成web 
        buildCommand:'your_build_command', //构建命令
    },
    {
        name: 'your_name',
        value: '2', //这个值需要唯一 inquirer 会根据这个值来选择
        ssh: {
            host: 'your_host', //远程服务器地址
            port: 22, //远程服务器端口 ssh默认的端口
            username: 'your_username', //远程服务器用户名
            password: 'your_password', //远程服务器密码
        },
        targetDir: 'your_target_dir', //本地文件路径
        targetFile: 'dist.zip', //本地文件名
        deployDir: 'your_deploy_dir', //远程服务器部署路径
        releaseDir: 'web', //dist会解压成web 
        buildCommand: 'npm run build:prod', //构建命令 
    }
]

export default config;
