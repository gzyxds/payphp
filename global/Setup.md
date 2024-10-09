##### 正版授权购买地址 [立即购买](https://m.sbu.cc/#/goods?gid=1)

## 系统简介

Peak码支付-是专为个人站长打造的聚合免签系统，拥有卓越的性能和丰富的功能。用全新轻量化的界面UI，让您可以更加方便快捷地解决知识付费和运营赞助的难题。同时，它基于高性能SpeedPHP+Layui+PearAdmin架构，提供实时监控和管理，使用云端无异地风险，让您随时随地掌握系统运营情况

## 功能亮点

**1.Peak系统采用全新的speedPHP框架开发，**
2.使用多线程Curl检测账单回调,
3.相比其它码系统效率提高上百倍不止,
4.多种支付最新协议以及出色的云端技术，
5.和三重防掉单技术，让你的使用更加舒适。

## 演示地址

前端：[https://sbu.cc](https://sbu.cc/)
后端：暂不开放（图片演示）
![66af2dfe9feb3.png](https://www.lovea.xin/usr/uploads/2024/08/2209369460.png "66af2dfe9feb3.png")

## 正版授权购买地址 [立即购买](https://m.sbu.cc/#/goods?gid=1)

1.免费升级， 我们将持续修复程序bug和更新功能，并提供免费升级服务，让您永远享受最新的Peak体验。
2.售后无忧， 我们提供专属客服、售后技术、论坛等全方位的售后服务，确保您的正常使用体验。
3.保障服务， 您将免费获取后期软件升级的新功能，并无需额外付费。
4.商用授权， 购买商业授权后，您将获得Peak码支付商业使用授权，让您更加放心地使用Peak码支付。

## 程序运行环境

搭建一个网站的标配包括了服务器和域名(Peak码支付不支持虚拟主机)强烈建议使用:2H2G以上服务器(标准版、系统选Debian12、其他配置默认即可后续可升级配置)，刚入门选择最低配置或者活动机器均可。服务器环境要求的配置: PHP 8.0 + Mysgl 5.7 + Swoole Loader加密扩展(推荐使用linux版本宝塔进行管理搭建，完美)

**服务器环境要求**

**Linux服务器环境，Debian12镜像**
Nignx 1.26.1
PHP 8.0
MySQL 5.7
php Swoole Loader加密扩展

## 安装教程

##### 1.创建站点

1.添加站点。点击左侧菜单 网站→添加站点
![66af3268eb96c.png](https://www.lovea.xin/usr/uploads/2024/08/1757281693.png "66af3268eb96c.png")

2.输入你要绑定的 网站域名 （上一步中域名配置所解析的域名）， PHP选择8.0 。都填写后，点击 提交
![66af33b171b9d.png](https://www.lovea.xin/usr/uploads/2024/08/1635643847.png "66af33b171b9d.png")

3.浏览器新建标签页，输入你刚绑定的域名，看是否可以打开,访问如出现此提示，创建成功

##### 2.程序上传

1.在授权站下载自己的专属安装包保存源码压缩包至本地电脑
![66af35dada526.jpg](https://www.lovea.xin/usr/uploads/2024/08/3404379384.jpg "66af35dada526.jpg")
![QQ20240820-134414.png](https://www.lovea.xin/usr/uploads/2024/08/248687129.png "QQ20240820-134414.png")
2.进入宝塔面板，选择左侧菜单网站 ，点击新建的站点进入根目录
![66af3761bc204.jpg](https://www.lovea.xin/usr/uploads/2024/08/98214733.jpg "66af3761bc204.jpg")
3.点击左上角 上传
![QQ20240820-134545.png](https://www.lovea.xin/usr/uploads/2024/08/4037963687.png "QQ20240820-134545.png")

4.点击上传文件，选择本地电脑PeakPay前台程序.ZIP，然后点击 开始上传 ，等待上传完成，关闭上传窗口。
![QQ20240820-134641.png](https://www.lovea.xin/usr/uploads/2024/08/3899104863.png "QQ20240820-134641.png")

5.解压包至当前目录（根目录），等待解压完成。
![66af38a174c2e.jpg](https://www.lovea.xin/usr/uploads/2024/08/1977737251.jpg "66af38a174c2e.jpg")

##### 3.站点配置

1.进入宝塔面板，选择左侧菜单网站， - 设置。
![66af390b3d919.jpg](https://www.lovea.xin/usr/uploads/2024/08/729979836.jpg "66af390b3d919.jpg")

2.点击左侧伪静态，复制对应的伪静态,然后点击保存
![QQ20240820-134849.png](https://www.lovea.xin/usr/uploads/2024/08/722394352.png "QQ20240820-134849.png")

#### 以下是伪静态代码 不用设置运行目录

Nginx的

```html
location / {
    if (!-e $request_filename){
        rewrite  ^(.*)$  /index.php?s=$1  last;   break;
    }
}
location ^~ /protected {
    deny all;
}
```

Apache的

```html
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.php [L]
</IfModule>
```

##### 4.安装SW拓展

###### 检查当前环境

> 1.操作系统 localhost.localdomain 3.10.0-957.21.3.el7.x86\_64 #1 SMP Tue Jun 18 16:35:19 UTC 2019 x86\_64
> 2.PHP版本 :8.0.26
> 3.PHP运行环境
> 4.PHP配置文件 :/www/server/php/80/etc/php.ini
> 5.PHP扩展安装目录 :/www/server/php/80/lib/php/extensions/no-debug-non-zts-20200930

###### 安装和配置Swoole Loader 扩展

1 – 下载Swoole Loader请下载兼容PHP8.0.26和非线程安全的Swoole Loader扩展
[点击下载 unix PHP8.0 Swoole Loader扩展文件](https://sbu.cc/p/Windows/swoole_loader_80_nts.so)
2 – 安装Swoole Loader
将刚才下载的Swoole Loader扩展文件（swoole\_loader\_80\_nts.so）
上传到当前PHP的扩展安装目录中：/www/server/php/80/lib/php/extensions/no-debug-non-zts-20200930
![QQ20240820-140344.png](https://www.lovea.xin/usr/uploads/2024/08/2419855431.png "QQ20240820-140344.png")

3 – 修改php.ini配置（如已修改配置，请忽略此步骤，不必重复添加）

编辑此PHP配置文件：/www/server/php/80/etc/php.ini
在此文件底部结尾处加入如下配置并且保存 ：extension=swoole\_loader\_80\_nts.so
注意：需要名称和刚才上传到当前PHP的扩展安装目录中的文件名一致
![QQ20240820-140220.png](https://www.lovea.xin/usr/uploads/2024/08/2987689684.png "QQ20240820-140220.png")
![66af3d3954d87.jpg](https://www.lovea.xin/usr/uploads/2024/08/1208260860.jpg "66af3d3954d87.jpg")

4 – 重启服务

重启或重载PHP配置

5 – 返回首页 或 刷新当前页面即可

##### 5.在线安装

安装方面问问题不会回复（直属用户除外）系统在安装方面没有bug，如长时间未安装成功，请联系 `阿新: 8726314`
1.安装完环境以及扩展之后访问域名首页点击前往安装进入安装界面
![QQ20240820-140504.png](https://www.lovea.xin/usr/uploads/2024/08/2413443718.png "QQ20240820-140504.png")

2.输入数据库账户密码，点击下一步

忘记数据库账户密码在哪里查看？
进入宝塔面板，点击左侧菜单栏 `数据库` ，找到对应生成的数据库，复制粘贴信息到安装界面即
![66af3e28e47a9.jpg](https://www.lovea.xin/usr/uploads/2024/08/1695207121.jpg "66af3e28e47a9.jpg")
![QQ20240820-140525.png](https://www.lovea.xin/usr/uploads/2024/08/4267103493.png "QQ20240820-140525.png")

3.输入完数据库账号密码数据名之后点击保存配置,在点击创建数据库表
![QQ20240820-140533.png](https://www.lovea.xin/usr/uploads/2024/08/1465903631.png "QQ20240820-140533.png")

4.显示安装成功之后点击下一步
![QQ20240820-140542.png](https://www.lovea.xin/usr/uploads/2024/08/1969585695.png "QQ20240820-140542.png")

5.添加成功，后台管理员账号密码:
admin/123456
后台地址:
你的域名/admin.zero
![QQ20240820-140552.png](https://www.lovea.xin/usr/uploads/2024/08/2903812852.png "QQ20240820-140552.png")