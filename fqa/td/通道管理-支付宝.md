# 支付宝通道

---

## 支付宝商家账单(无需CK,无需挂机)

---

> [!NOTE]
> 
> 之前没有申请过的用户，可能操作有所变动

### 前期准备工作

1. 首先到支付宝开放平台完成注册及实名认证

> [!TIP]
> 
> [https://open.alipay.com/](https://open.alipay.com/)

2. 然后进入你的控制台，选择`网页/移动应用`，点击`创建网页/移动应用`，在创建页面选择`网页应用`。

![支付宝开放平台控制台](https://s2.loli.net/2024/03/20/b9FZSxDsUR6q425.png)

![创建网页应用](https://s2.loli.net/2024/03/20/KLb85iRxp9XnfrA.png)

3. 创建完成后需要审核，一般1天内。

### 配置网页应用

1. 前一步全部完成后，点击网页应用后面的`详情`

![网页应用详情](https://s2.loli.net/2024/03/20/AeMm2CTzjIOfpbq.png)

2. 在弹出的新页面点击`产品绑定`，开通`基础功能产品`（最好是把免费的服务全部开通）

![产品绑定](https://s2.loli.net/2024/03/20/2XbTBmc4dNCkeJ8.png)

3. 接着在开发设置里，配置`接口加签方式（密钥/证书）`

![接口加签方式](https://s2.loli.net/2024/03/20/jF4x1GAgqKyVhvJ.png)

#### 配置`接口加签方式（密钥/证书）`

> [!NOTE]
> 
> 这里演示的账号已经开通过了，所以所有的都显示为变更，但是步骤是一样的

1. 在打开配置页面后，选择`密钥（普遍适用）`

![选择密钥方式](https://s2.loli.net/2024/03/20/Fqp5xwGXzbZKslT.png)

2. 下载并安装提示中的`密钥工具`，按照新页面提示下载指定程序包，然后安装

![下载密钥工具](https://s2.loli.net/2024/03/20/l8SK9eay1ZgQRIu.png)
    
3. 打开工具，按下图所示选择，然后点击生成密钥

![生成密钥](https://s2.loli.net/2024/03/20/R9XTZjeB62yOzvb.png)
    
4. 保存好生成的公钥和私钥

![保存密钥](https://s2.loli.net/2024/03/20/JKgItQVvroApfR5.png)
    
5. 在网页中点击下一步，按照提示填写公钥，然后点`确认上传`，提示密钥保存成功即可

![上传公钥](https://s2.loli.net/2024/03/20/7HEKgfORalezWI6.png)
    
6. 如过提示，点击稍后操作即可。

![稍后操作](https://s2.loli.net/2024/03/20/PrRNckz97LKxWl6.png)

### 配置XarrPay

1. 进入XarrPay管理后台，选择通道管理，按照下图新增通道，使用方式两者皆可

![新增通道](https://s2.loli.net/2024/03/20/8gy17TIapjewduq.png)
    
2. 应用AppId，在支付宝开放平台，控制台中查询，如下图，私钥填写刚刚软件生成的私钥。

![查询AppId](https://s2.loli.net/2024/03/20/bglvcIVWtBof5x6.png)
    

#### 使用方式详解

1. 选择二维码 使用二维码解析工具解码自己的收款码

> [!TIP]
> 
> 推荐草料二维码解析[https://cli.im/deqr](https://cli.im/deqr)

   将解码后得到的链接填入即可

2. 选择支付宝PID
    
   1. 方法一 支付宝扫码获取PID  
      ![支付宝扫码获取PID](https://s2.loli.net/2024/03/20/nV1Shlz7AxPX8Tc.png)
   2. 方法二（三个链接选一个即可）

      > [!TIP]
> 
> [https://b.alipay.com/page/store-management/infomanage](https://b.alipay.com/page/store-management/infomanage)  
> 上面链接的-商户号(收单账号)
      
> [!TIP]
> 
> [https://open.alipay.com/develop/manage/account/manage](https://open.alipay.com/develop/manage/account/manage)
> 
> 上面链接的-账号ID
      
> [!TIP]
> 
> [https://open.alipay.com/platform/keyManage.htm?keyType=partner](https://open.alipay.com/platform/keyManage.htm?keyType=partner)
> 
> 上面链接的-合作伙伴身份（PID）

3. 配置好之后，使用通道自带的支付测试，测试配置是否正确。如有疑问请联系你的上级