# iPad 部署指南

## 环境需求

::: info 环境要求
- Nginx 1.24.0+
- MySQL 5.7.43+
- Redis 7.4.3+
:::


::: info 环境要求
- iPad云端目前不太推荐使用，有可能扫码会登入不上或者不出码
:::

## 安装环境

![安装环境界面](https://www.xarrpay.cn/assets/img_35-C47kOrWY.png)

## 创建数据库

1. 点击侧边栏 `数据库`
2. 点击添加数据库
3. 填写数据库名/用户名和密码
4. 点击确定

![创建数据库界面](https://www.xarrpay.cn/assets/img_36-DnbFC95W.png)

## 上传文件

1. 点击侧边栏 `文件`
2. 上传并解压包

![上传文件界面](https://www.xarrpay.cn/assets/img_37-BWsw3O0S.png)

## 配置信息

1. 进入 `assets` 目录
2. 点击编辑 `setting.json` 文件
3. 配置数据库和Redis信息

![配置信息界面](https://www.xarrpay.cn/assets/img_38-BU62dGnk.png)

## 添加项目

1. 点击侧边栏 `网站`
2. 点击上方 `Go项目`
3. 点击 `添加Go项目`
4. 点击 `添加执行文件`
5. 点击选择 `xarr-linux` 可执行文件
6. 点击确认

![添加项目界面](https://www.xarrpay.cn/assets/img_39-B-bkw3F5.png)

## 配置项目信息

1. 添加 `项目执行文件`
2. 填写 `项目名称`（**注意：项目名称不能带符号**）
3. 填写 `项目端口`
4. 勾选 `开机启动`
5. 点击 `确定`

![配置项目信息界面](https://www.xarrpay.cn/assets/img_40-DtXKKUe3.png)

## 查看状态

1. 点击 `设置`
2. 点击 `项目日志`
3. 查看状态是否正常（全部为 `success` 表示正常）

![查看状态界面](https://www.xarrpay.cn/assets/img_41-DIFVJbtX.png)
