# AutoDeploy - 自动化部署工具

一个基于Node.js的自动化部署工具，支持多项目配置、自动构建、文件压缩、SSH上传和远程部署。

## 功能特性

- 🚀 **多项目支持** - 支持配置多个部署项目，一键切换
- 🔨 **自动构建** - 支持自定义构建命令，自动执行项目构建
- 📦 **文件压缩** - 自动将构建产物压缩为ZIP文件
- 🔐 **SSH连接** - 通过SSH安全连接到远程服务器
- 📤 **自动上传** - 自动上传压缩文件到远程服务器
- 🎯 **自动部署** - 远程自动解压和部署文件
- 💻 **交互式选择** - 支持命令行参数和交互式项目选择

## 安装依赖

### 推荐使用 pnpm

```bash
# 使用pnpm安装依赖（推荐）
pnpm install
```


## 配置说明

### 1. 复制配置文件

```bash
cp config.exemple.js config.js
```

### 2. 编辑配置文件

编辑 `config.js` 文件，配置您的项目信息：

```javascript
const config = [
    {
        name: '项目名称1',           // 显示名称
        value: '1',                 // 唯一标识符
        ssh: {
            host: 'your_host',      // 远程服务器地址
            port: 22,               // SSH端口
            username: 'your_username', // 用户名
            password: 'your_password', // 密码
        },
        targetDir: 'your_target_dir',    // 本地构建目录
        targetFile: 'dist.zip',          // 压缩文件名
        deployDir: '/usr/share/nginx/html/your_project', // 远程部署目录
        buildCommand: 'npm run build',   // 构建命令
    },
    {
        name: '项目名称2',
        value: '2',
        // ... 其他配置
    }
]
```

### 配置参数说明

| 参数 | 说明 | 示例 |
|------|------|------|
| `name` | 项目显示名称 | `'前端项目'` |
| `value` | 项目唯一标识符 | `'1'` |
| `ssh.host` | 远程服务器地址 | `'192.168.1.100'` |
| `ssh.port` | SSH端口 | `22` |
| `ssh.username` | SSH用户名 | `'root'` |
| `ssh.password` | SSH密码 | `'your_password'` |
| `targetDir` | 本地构建目录路径 | `'./dist'` |
| `targetFile` | 压缩文件名 | `'dist.zip'` |
| `deployDir` | 远程部署目录 | `'/var/www/html'` |
| `buildCommand` | 构建命令 | `'npm run build:prod'` |

## 使用方法

### 如何运行

#### 使用 pnpm 运行（推荐）

```bash
# 运行程序，会显示项目选择菜单
pnpm app

# 或者使用 pnpm 直接运行
pnpm start

# 构建项目
pnpm build

```


#### 全局安装使用

```bash
# 全局安装
pnpm install -g .

# 全局使用
auto-upload
```

## 部署流程

1. **选择项目** - 从配置列表中选择要部署的项目
2. **执行构建** - 在指定目录执行构建命令
3. **压缩文件** - 将构建产物压缩为ZIP文件
4. **连接服务器** - 通过SSH连接到远程服务器
5. **上传文件** - 上传压缩文件到远程服务器
6. **自动部署** - 在远程服务器解压文件并部署
7. **完成部署** - 显示部署成功信息

## 项目结构

```
autoUpload/
├── app.js                 # 主入口文件
├── config.js             # 项目配置文件
├── config.exmple.js      # 配置文件模板
├── package.json          # 项目依赖配置
├── utils/                # 工具函数目录
│   ├── build.js          # 构建工具
│   ├── compressFile.js   # 文件压缩工具
│   ├── handleCommand.js  # 远程命令执行工具
│   ├── helper.js         # 命令行交互工具
│   ├── ssh.js           # SSH连接工具
│   └── uploadFile.js    # 文件上传工具
└── README.md            # 项目说明文档
```

## 依赖说明

- `archiver` - 文件压缩库
- `inquirer` - 命令行交互库
- `node-ssh` - SSH连接库

## 注意事项

1. **安全性** - 建议使用SSH密钥认证替代密码认证
2. **权限** - 确保SSH用户对目标目录有写入权限
3. **网络** - 确保本地机器能够访问远程服务器
4. **构建** - 确保构建命令在指定目录下能够正常执行
5. **备份** - 建议在部署前备份远程服务器上的现有文件

## 故障排除

### 常见问题

1. **SSH连接失败**
   - 检查服务器地址、端口、用户名和密码
   - 确认服务器SSH服务正常运行
   - 检查防火墙设置

2. **构建失败**
   - 检查构建命令是否正确
   - 确认目标目录存在
   - 检查项目依赖是否完整

3. **上传失败**
   - 检查远程目录权限
   - 确认磁盘空间充足
   - 检查网络连接

4. **解压失败**
   - 检查远程服务器是否安装了unzip命令
   - 确认目标目录存在且有写入权限

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。


