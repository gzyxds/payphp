# 使用 Docker 安装系统

> 注: Docker 镜像可能不一定及时更新

## 方法一：使用 docker-compose 安装

创建 `docker-compose.yml` 文件，内容如下：

```yaml
version: '3.8'
services:
  xarr-pay-merchant:
    container_name: xarr-pay-merchant
    image: xiaoyi510/xarr-pay-merchant
    environment:
      - TZ=Asia/Shanghai
    ports:
      - "32000:32000"
    volumes:
      - ./plugins:/app/plugins
      - ./config:/app/config
      - ./runtime:/app/runtime
    entrypoint: /app/xarr-pay-merchant
    restart: always
```

然后运行以下命令启动服务：

```bash
docker-compose up -d
```

## 方法二：使用 docker run 命令行运行

也可以直接使用 `docker run` 命令启动容器：

```bash
docker run -d \
  --name xarr-pay-merchant \
  --restart always \
  -e TZ=Asia/Shanghai \
  -p 32000:32000 \
  -v ./plugins:/app/plugins \
  -v ./config:/app/config \
  -v ./runtime:/app/runtime \
  xiaoyi510/xarr-pay-merchant
```

## 访问系统

系统启动后，可以通过以下地址访问：

```
http://localhost:32000
```

## 数据持久化说明

配置的卷挂载说明：
- `./plugins`: 插件目录，存放系统插件
- `./config`: 配置文件目录，存放系统配置
- `./runtime`: 运行时目录，存放日志和临时文件