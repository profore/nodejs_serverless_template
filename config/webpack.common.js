const path = require("path");
const fs = require("fs");
const dir = path.resolve(__dirname, '..');

module.exports = {
    target: 'node',
    /**
     * 以下已知阿里云内置的模块可不打包，可自行在下方 externals 内配置
     * https://help.aliyun.com/document_detail/58011.html?spm=a2c4g.11186623.2.13.31aa64ed3XuBb7#h2-u4F7Fu7528u5185u7F6Eu7684u6A21u57572
     * 
        co	4.6.0	控制流	https://github.com/tj/co
        gm	1.23.0	图片处理库	https://github.com/aheckmann/gm
        ali-oss	4.10.1	OSS SDK	https://github.com/ali-sdk/ali-oss
        ali-mns	2.6.5	MNS SDK	https://github.com/InCar/ali-mns
        tablestore	4.2.0	OTS SDK	https://github.com/aliyun/aliyun-tablestore-nodejs-sdk
        aliyun-sdk	1.10.12	Aliyun SDK	https://github.com/aliyun-UED/aliyun-sdk-js
        @alicloud/fc2	2.1.0	函数计算SDK	https://github.com/aliyun/fc-nodejs-sdk
        opencv	6.0.0	视觉算法库	https://github.com/peterbraden/node-opencv
        body	5.1.0	http body 解析库	https://github.com/Raynos/body
        raw-body	2.3.2	http body 解析库	https://github.com/stream-utils/raw-body   
     */
    externals: [
        // 'body', 
    ],
    entry: () => {
        const ignore = [
            'node_modules',
            'config',
            'dist'
        ];
        const entryData = {};
        fs.readdirSync(dir).forEach(serverName => {
            if ( ignore.indexOf(serverName) === -1 && fs.statSync(`${dir}/${serverName}`).isDirectory() ) {
                fs.readdirSync(`${dir}/${serverName}`).forEach(funName => {
                    if ( ignore.indexOf(funName) === -1 ){
                        entryData[`${serverName}/${funName}/dist/index`] = `./${serverName}/${funName}`;
                    }
                });
            }
        });
        console.log(entryData);
        return entryData;
    },
    output: {
        path: dir,
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                          "@babel/preset-env",
                          {
                            "targets": {
                              "node": true
                            }
                          }
                        ]
                    ]
                }
            }
        }]
    }
};