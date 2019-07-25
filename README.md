
# nodejs_serverless_template

## 说明

一个基于[阿里云函数计算](https://fc.console.aliyun.com/overview/cn-hangzhou)的nodejs项目模板  
主逻辑为根据service/function的目录结构打包js文件到各个function目录下的dist文件夹  
配合VsCode插件Aliyun Serverless食用更佳  

Tips：插件创建的函数记得在CodeUri后方加上\dist，如
```yml
CodeUri: demoService\demoFun\dist
```

## 前期准备

- [Node.js](https://nodejs.org/zh-cn/)
- [Fun](https://github.com/alibaba/funcraft/blob/master/docs/usage/installation-zh.md)

## 安装依赖

```bash
npm install
```

## 编译

```bash
# 生成编译
npm run build

# 开发编译（会监听文件变化主动编译）
npm run dev
```

## 本地调试

```bash
npm start
```

## 部署函数到云端

```bash
npm run deploy
```

## 参考
- [《开发函数计算的正确姿势》](https://yq.aliyun.com/articles/701714?spm=5176.10695662.1996646101.searchclickresult.87a033fdHQgq3f)  