# Payphp三网PC监控

> [!TIP]
> 本文挂机宝配置：2+2
>
> Windows-2012R2-Datacenter

## 安装运行

> [!TIP]
> 软件下载请到售后群文件夹

1. 下载后得到一个压缩包，将压缩包解压到任意目录
2. 双击运行 `三网监控`

![软件启动界面](https://s2.loli.net/2024/07/25/WldZ3T2jDNnyitu.png)

## 配置

> [!TIP]
> 以个人版为例，商户版本自行对应填写

### 商户设置

1. 在软件页面点击下载适配的微信(QQ、旺旺)版本

![下载适配版本界面](https://s2.loli.net/2024/07/25/aGsOdHfFlizbVDw.png)

2. 下载并安装好版本后，填写`商户地址`、`商户ID`、`商户密钥`。

> [!NOTE]
> `商户地址`只填写`http://商户地址`，不需要后面的`/xpay/epay/`

> [!TIP] 新版本已增加一键导入
> - 商户版：`商户后台` > `API` > `复制信息`

![商户信息设置界面](https://s2.loli.net/2024/07/25/jsoQENnKWvMqUTH.png)

### 程序配置

依次点击`获取微信目录`、`获取旺旺目录`、`一键安装Edge`。

![程序配置界面](https://s2.loli.net/2024/07/25/3ytVnPYHjaDKNcT.png)

## 添加账号

> [!TIP] 添加账号
> 在添加前，请确保要添加的客户端已全部退出。

### 微信

1. 点击添加微信账户，会打开微信
2. 登录后会在底面显示出来

![微信账户添加界面](https://s2.loli.net/2024/07/25/jHXGyMhzE5UqcJF.png)

### 旺旺（支付宝）

1. 点击`添加旺旺账户`，会打开旺旺
2. 登录后，程序会自动获取旺旺（支付宝）ck
3. 获取后会在底面显示出来

![旺旺账户添加界面](https://s2.loli.net/2024/07/25/W9OBw6XbLtpCoQj.png)

### QQ

1. 添加QQ账户前请先登录好需要监控的QQ
2. 点击`添加QQ账户`

![QQ账户添加界面](https://s2.loli.net/2024/07/25/6eYbvGlmB2h1Z5a.png)

3. 在弹出的窗口勾选需要监控的QQ，点击`监控选择QQ`

![QQ选择监控界面](https://s2.loli.net/2024/07/25/c3amlujBn4GSt5K.png)

4. 监控好后，在商户列表里会显示

![QQ监控成功界面](https://s2.loli.net/2024/07/25/A1jfwshXtSrJB4y.png)

## 通知管理

- 失效通知：当监控账号失效或者掉线后通知你
- 订单通知：监控到新的付款信息并回调成功后通知你
- 设定完成后点击`测试通知配置`确保配置正确

### 邮箱通知

1. 在`程序配置`中选中`邮箱模式`
2. 填写相关信息

![邮箱通知配置界面](https://s2.loli.net/2024/07/25/4shuy1BqzvxmjGE.png)

### 钉钉通知

1. 创建钉钉群

![钉钉群创建界面](https://s2.loli.net/2024/07/25/4ukACdIYmv9sZLq.png)

2. 点击群设置 -> 机器人 -> 添加机器人 -> 自定义

![添加机器人界面](https://s2.loli.net/2024/07/25/QGWlAZcF2HD8reJ.png)

3. 选择安全模式为`加签`，复制密钥，完成后复制`webhook地址`

![安全设置界面](https://s2.loli.net/2024/07/25/TMBtcPOheFd83Al.png)

4. 在`程序配置`中选中`钉钉模式`，并填写相关信息

![钉钉通知配置界面](https://s2.loli.net/2024/07/25/C35uv78YzkXwl1D.png)

### 企业微信通知

1. 创建企业微信群，添加群机器人

![企业微信群创建界面](https://s2.loli.net/2024/07/25/zSf3LUThAKoIaeZ.png)

2. 填写好信息，新建机器人

![机器人创建界面](https://s2.loli.net/2024/07/25/dgkehTr213oEIct.png)

3. 复制机器人的webhook地址

![Webhook地址界面](https://s2.loli.net/2024/07/25/xDCc6Sti8UjT5qJ.png)

4. 在`程序配置`中选中`企业微信`，并填写机器人的webhook地址

![企业微信配置界面](https://s2.loli.net/2024/07/25/LP23rvSA9cDIQlR.png)
