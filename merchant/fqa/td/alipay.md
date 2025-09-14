# 通道管理 - 支付宝免挂

## 支付宝商家账单（无需CK，无需挂机）

::: warning 重要提醒
之前没有申请过的用户，已无法使用
:::

### 前期准备工作

首先到支付宝开放平台完成注册及实名认证：

**支付宝开放平台：** https://open.alipay.com

然后进入你的控制台，选择`网页/移动应用`，点击`创建网页/移动应用`，在创建页面选择`网页应用`。

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/b9FZSxDsUR6q425.png)

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/KLb85iRxp9XnfrA.png)

::: tip 审核时间
创建完成后需要审核，一般1天内。
:::

### 配置网页应用

前一步全部完成后，点击网页应用后面的`详情`

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/AeMm2CTzjIOfpbq.png)

在弹出的新页面点击`产品绑定`，开通`基础功能产品`

::: tip 建议
最好是把免费的服务全部开通
:::

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/2XbTBmc4dNCkeJ8.png)

接着在开发设置里，配置`接口加签方式（密钥/证书）`

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/jF4x1GAgqKyVhvJ.png)

#### 配置接口加签方式（密钥/证书）

::: info 说明
这里演示的账号已经开通过了，所以所有的都显示为变更，但是步骤是一样的
:::

在打开配置页面后，选择`密钥（普遍适用）`

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/Fqp5xwGXzbZKslT.png)

下载并安装提示中的`密钥工具`，按照新页面提示下载指定程序包，然后安装

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/l8SK9eay1ZgQRIu.png)

打开工具，按下图所示选择，然后点击生成密钥

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/R9XTZjeB62yOzvb.png)

::: warning 重要
保存好生成的公钥和私钥
:::

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/JKgItQVvroApfR5.png)

在网页中点击下一步，按照提示填写公钥，然后点`确认上传`，提示密钥保存成功即可

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/7HEKgfORalezWI6.png)

如过提示，点击稍后操作即可。

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/PrRNckz97LKxWl6.png)

### 配置

进入管理后台，选择通道管理，按照下图新增通道

::: tip 使用方式
使用方式两者皆可
:::

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/8gy17TIapjewduq.png)

应用AppId，在支付宝开放平台，控制台中查询，如下图，私钥填写刚刚软件生成的私钥。

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/bglvcIVWtBof5x6.png)

#### 使用方式详解

**选择二维码方式：**

使用二维码解析工具解码自己的收款码

::: tip 推荐工具
推荐草料二维码解析：[https://cli.im/deqr](https://cli.im/deqr)
:::

将解码后得到的链接填入即可

**选择支付宝PID方式：**

**方法一：支付宝扫码获取PID**

![通道管理-支付宝免挂](https://s2.loli.net/2024/03/20/nV1Shlz7AxPX8Tc.png)

**方法二：通过链接获取（三个链接选一个即可）**

1. **商户号（收单账号）**
   https://b.alipay.com/page/store-management/infomanage

2. **账号ID**
   https://open.alipay.com/develop/manage/account/manage

3. **合作伙伴身份（PID）**
   https://open.alipay.com/platform/keyManage.htm?keyType=partner

::: tip 测试配置
**配置好之后，使用通道自带的支付测试，测试配置是否正确**
:::

