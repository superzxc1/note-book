# 家用服务器
## 服务器准备
参考[centos安装](./centos_install.md)

## 内网穿透

### 获取外网ip
用 ifconfig.me 查询外网ip，并比较与光猫`WANIP`是否一致。如不一致，尝试重启网关，还是不一致只能打电话给要求电信提供外网ip。

### DMZ配置
在光猫中将服务器内网ip配置到的DMZ区
1. 获取光猫超级管理员密码。[参考](https://baijiahao.baidu.com/s?id=1595644263274492895&wfr=spider&for=pc)
2. 登陆后在应用>DMZ配置服务器内网ip
3. 重启路由
   
### DDNS配置
因为电信在重启光猫或其他时候重新分配ip，所以这时候需要DDNS。

阿里云有`python`开发包，我们可以用定时脚本实现DDNS。

- 大概思路：

定时访问 ifconfig.me 查询本机ip，调用阿里云SDK更新域名解析即可。

#### 参考
- [阿里云实现DDNS](http://fisherworks.cn/?p=2337)
- [DDNS脚本](https://github.com/mgsky1/DDNS)

#### 问题
1. DDNS脚本跑了几天后发现，电信有时会分配一个保留ip，而非公网ip，但发现重启光猫，会重新分配到外网ip。
    - 需要修改脚本了，加上 ifconfig.me 与 WANIP的比对，如不一致，重启路由器。

2. 内网无法用域名访问到服务器。
    - 考虑内网搭DNS(dnsmasq)，直接解析域名到内网ip。[参考1](https://www.jianshu.com/p/c54679f73a05)|[参考2](https://cloud.tencent.com/developer/article/1174717)
    - 修改路由器DHCP的网关配置。

## 安全加固

今天登陆到服务器上，发现有1k多次登陆失败的日志。这是有人在爆破，所以需要对服务器做一些安全加固：
1. 修改SSH的默认端口`22`
2. 改一个非常复杂的密码，或者直接禁用密码，采用公钥登陆。
    - `PasswordAuthentication no`
3. 配置防火墙，只开放必要的端口。

### 问题
#### ssh端口变更后无法启动
> error: Bind to port 1234 on 0.0.0.0 failed: Permission denied

是`selinux`的问题,默认`sshd`在`selinux`只开放`22`端口，需要如下设置：
```bash
semanage port -l | grep ssh #查看开放的端口
semanage port -a -t ssh_port_t -p tcp 1234 # 开放指定端口
```
参考：
- [Change SSH port in CentOS with SELinux](https://blog.tinned-software.net/change-ssh-port-in-centos-with-selinux/)