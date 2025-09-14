# APP监控

## SmsForwarder配置

### 致谢

APP监控使用`SmsForwarder`进行数据转发

---

**GitHub仓库**：[https://github.com/pppscn/SmsForwarder](https://github.com/pppscn/SmsForwarder)

**Gitee仓库**：[https://gitee.com/pp/SmsForwarder/](https://gitee.com/pp/SmsForwarder/)

> [!TIP]
> 这里介绍使用APP进行监控的通用方法，具体支持通道请自行测试！

> [!TIP] APP监控软件
> 链   接：https://www.123865.com/s/AIVRVv-5ggJA

---

软件下载请到售后群文件夹或项目仓库

---

本文使用的`SmsForwarder`版本为`3.3.1.240418`

## 通用设置

> [!TIP] 必备设置
> 必备设置，其他请根据自身需求配置

---

> [!NOTE] 注意！！！
> 配置后无效果，请到应用权限管理里手动授予权限

1. 打开`转发功能`下的`转发应用通知`，如需权限请授予（通知使用权限）
2. 打开`增强功能`下的`启动时异步获取已安装App列表`，并勾选`用户应用`，如需权限请授予（获取应用列表权限）
3. 打开`保活措施`下的`开机启动`和`忽略电池优化设置`，如需权限请授予（自启动、省电策略-无限制）
4. 打开`个性设置`下的`启用自定义模板`，并填入转发信息模板

> [!TIP]
> v3.3.1开始只保留英文标签，请根据自己的版本，选择对应的模板

### 版本号 > v3.3.1版本模板

```json
{
    "from": "{{FROM}}",
    "package_name": "{{PACKAGE_NAME}}",
    "app_name": "{{APP_NAME}}",
    "title": "{{TITLE}}",
    "msg": "{{MSG}}",
    "receive_time": "{{RECEIVE_TIME}}",
    "device_name": "{{DEVICE_NAME}}"
}
```

### 版本号 < v3.3.1版本模板

```json
{
    "from": "{{来源号码}}",
    "package_name": "{{APP包名}}",
    "app_name": "{{APP名称}}",
    "title": "{{通知标题}}",
    "msg": "{{通知内容}}",
    "receive_time": "{{接收时间}}",
    "device_name": "{{设备名称}}"
}
```

![SmsForwarder配置界面](https://s2.loli.net/2024/08/03/FG6jtBgdIlfY9mT.png)

*图：SmsForwarder配置界面*

## 发送通道

> [!TIP] 发送通道
> 以商户版为例，配置方法与个人版相同

1. 新增`发送通道`，选择`Webhook`类型，请求方式选择`POST`
2. 在`WebHookServer`中填入`短信转发器通知地址`
3. 点击保存

![发送通道配置界面1](/images/help/faq1.jpg)

*图：发送通道配置界面1*

![发送通道配置界面2](/images/help/help2.jpg)

*图：发送通道配置界面2*

## 转发规则

1. 在`应用`页中新增转发规则
2. 选择上一步新增的`发送通道`
3. `匹配字段`选择`APP包名`
4. `匹配模式`选择`是`
5. `匹配的值`可以下拉选择APP
6. 点击保存

### 匹配的值

- 微信：`com.tencent.mm`
- 支付宝：`com.eg.android.AlipayGphone`

![转发规则配置界面](/images/help/help3.jpg)

*图：转发规则配置界面*

## X转发器配置

---
