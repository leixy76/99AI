# NineAI 更新整合版

## 更新日志

### v2.4.5

1. 部分页面UI精简。
2. 管理端地址改为 `/admin`，默认密码均设为 `123456`。
3. 支持使用 GPT-4-All（第三方逆向）解析上传的文件、图片。
4. 增加模型关联 Token 计费（可选）。
5. MJ 版本默认调整为 v6.0。


## 页面预览
<img width="1229" alt="image" src="https://github.com/vastxie/NineAIQuickDeploy/assets/24899308/7b71ea8f-d7ed-4f56-9786-2f9870d57146">

<img width="1229" alt="image" src="https://github.com/vastxie/NineAIQuickDeploy/assets/24899308/c1a6a266-2617-4057-8c7f-fd5c4b81990d">

<img width="1229" alt="image" src="https://github.com/vastxie/NineAIQuickDeploy/assets/24899308/ff86d090-06c9-4da8-a003-ab927304db63">

<img width="1229" alt="image" src="https://github.com/vastxie/NineAIQuickDeploy/assets/24899308/e367d24f-4d55-48e6-8885-bff9bb503923">

<img width="1229" alt="image" src="https://github.com/vastxie/NineAIQuickDeploy/assets/24899308/a5dda0b3-98e7-4a17-b8b6-8a2df9969d31">


## 环境准备

1. **安装Node.js环境**
   - 请根据您的操作系统下载并安装Node.js。
   - 可以从[Node.js官网](https://nodejs.org/)下载。

2. **安装PM2**
   - 使用npm安装PM2：`npm install pm2 -g`
   - PM2是一个带有负载均衡功能的Node应用的进程管理器。

3. **安装PNPM**
   - 使用npm安装PNPM：`npm install -g pnpm`
   - PNPM是一个快速、节省磁盘空间的包管理工具。

## 配置项目

1. **配置环境变量**
   - 复制`.env.example`文件为`.env`。
   - 根据需要修改`.env`文件中的配置项。

2. **安装项目依赖**
   - 运行命令：`pnpm install`(若安装失败可尝试使用国内源)
   - 这将根据`package.json`文件安装所有必需的依赖。

## 启动项目

1. **启动服务**
   - 使用命令：`pnpm start`
   - 这将启动项目，并默认在9520端口监听。

2. **访问项目**
   - 在浏览器中访问`http://localhost:9520`，或者如果配置了nginx反向代理，则通过配置的域名访问。

## 管理平台

- **管理端地址**：`/admin`
- **普通管理员账号**：`admin`
- **超级管理员账号**：`super`
- **密码**：`123456`

普通管理员，可以预览后台非敏感信息。登入后台后请及时修改管理员密码，或按需要禁用普通管理员。

请确保遵循上述步骤进行配置和启动，以保证系统的正确运行。

## 项目升级

1. **拉取更新**

   - 拉取新的整合包：`git pull`

2. **删除旧进程**

   - 删除旧的 PM2 进程。

3. **安装依赖**

   - 运行命令：`pnpm install` 以安装 `package.json` 中定义的必需依赖。

4. **启动服务**
   - 使用命令：`pnpm start` 来启动项目，它将默认在 9520 端口监听。

## 学习交流

<img src="https://github.com/vastxie/NineAIQuickDeploy/assets/24899308/d0b4764c-3b71-4e5b-9fb2-3263f5466e9f" width="300">



