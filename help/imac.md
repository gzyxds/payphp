## 部署命令

## 安装docker
```
if [ -f /usr/bin/curl ];then curl -sSO https://gitproxy.click/https://raw.githubusercontent.com/xarrpay/bashinstall/refs/heads/main/docker-ce/install-docker-beta.sh;else wget -O install-docker.sh https://gitproxy.click/https://raw.githubusercontent.com/xarrpay/bashinstall/refs/heads/main/docker-ce/install-docker-beta.sh;fi;bash install-docker.sh
```

## 安装云端
```
docker run --restart always -d -it --name=iMac_container -p 3011:82 ghcr.nju.edu.cn/xarrpay/yunduan/ypayimac:latest
```
