## 部署命令

## 安装docker

::: info 注意
- iPad云端目前不太推荐使用，有可能扫码会登入不上或者不出码、还有封号的风险
:::


```
if [ -f /usr/bin/curl ];then curl -sSO https://gitproxy.click/https://raw.githubusercontent.com/xarrpay/bashinstall/refs/heads/main/docker-ce/install-docker-beta.sh;else wget -O install-docker.sh https://gitproxy.click/https://raw.githubusercontent.com/xarrpay/bashinstall/refs/heads/main/docker-ce/install-docker-beta.sh;fi;bash install-docker.sh
```

## 安装云端
```
docker run --restart always -d -it --name=iMac_container -p 3011:82 ghcr.nju.edu.cn/xarrpay/yunduan/ypayimac:latest
```
