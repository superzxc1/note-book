# docker 学习笔记

## 常用命令

### 容器过滤
- 根据容器`name`过滤，并返回容器ID：
```bash
docker ps -q -f name='awesome*'
```


## dockerfile

### 组成部分

| 部分 | 命令 |
- | - 
基础镜像信息 | FROM
维护者信息 | MAINTAINER
镜像操作指令 | RUN、COPY、ADD、EXPOSE、WORKDIR、ONBUILD、USER、VOLUME等
容器启动时执行指定 | CMD、ENTRYPOINT

### 参考
- [学习Docker之Dockerfile的命令](https://www.jianshu.com/p/10ed530766af)

## 问题

### x509: certificate signed by unknown authority

1. 导出证书. 用 https 打开 registry 并将证书导出: https://registry.docker.xxx.com. 我用的火狐, 提示证书不受信任, 点击"高级","添加例外","查看", 在"详情"标签页, 有一个"导出"按钮. 导出一个后缀名为crt或者cer的证书.
2. 将证书添加到docker.
   - 首先在`/etc/docker/certs.d/`目录下创建registry.docker.xxx.com的目录.
   - 然后将证书拷贝到`registry.docker.xxx.com`目录下. 并且将证书重命名为ca.crt或者ca.cer. 注意, 后缀名不重要, 名字一定要是ca.
   - 重启docker即可. `systemctl restart docker.service`
- [参考](http://www.voidcn.com/article/p-rlsdwrdh-bot.html)

## 学习资料
- [Docker — 从入门到实践](https://docker_practice.gitee.io/)