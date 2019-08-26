# centos应用安装与使用
## zsh

### 安装
#### 安装zsh
```bash
yum -y update
yum install -y zsh
```
#### 安装oh-my-zsh
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
#### 配置
```bash
# vim ~/.zshrc
ZSH_THEME="candy"

plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

```
安装插件：
```bash
git clone https://github.com/zsh-users/zsh-autosuggestions --depth=1 $ZSH_CUSTOM/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git --depth=1 ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

### 参考
- [centos7安装zsh配置oh-my-zsh](https://www.jianshu.com/p/4ce7d511bc13)  
- [zsh常用插件](https://www.jianshu.com/p/a94e2c59f244)


## Git

### 安装
- 删除旧版
```bash
sudo yum remove git*
```
- 安装新版
```bash
sudo yum -y install  https://centos7.iuscommunity.org/ius-release.rpm
sudo yum -y install  git2u-all
```

### 参考
- [How to Install latest version of Git ( Git 2.x ) on CentOS 7](https://computingforgeeks.com/how-to-install-latest-version-of-git-git-2-x-on-centos-7/)


## Node.js

### 安装
```bash
curl -sL https://rpm.nodesource.com/setup_12.x | bash -
yum install -y nodejs
```
### 参考
- [centos下安装nodejs的三种种方式](https://blog.csdn.net/bbwangj/article/details/82253785)

## python3

### 安装
```bash
sudo yum install -y https://centos7.iuscommunity.org/ius-release.rpm
sudo yum update
sudo yum install -y python36u python36u-libs python36u-devel python36u-pip
python3.6 -V
```
### 参考
[How to Install Python 3.6.4 on CentOS 7](https://www.rosehosting.com/blog/how-to-install-python-3-6-4-on-centos-7/)

## JDK
### 安装
```bash
yum -y update
yum install java-1.8.0-openjdk
```
### 参考
[Install Java 8 on CentOS 7](https://www.liquidweb.com/kb/install-java-8-on-centos-7/)
## Maven
### 安装
```bash
sudo yum install maven
mvn -version
```
### 配置
```xml
<!-- settings.xml -->
<mirrors>
    <mirror>
        <id>nexus-aliyun</id>
        <mirrorOf>*</mirrorOf>
        <name>Nexus aliyun</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
</mirrors>
<profile>    
    <id>jdk-1.8</id>    
    <activation>    
        <activeByDefault>true</activeByDefault>    
        <jdk>1.8</jdk>    
    </activation>    
    <properties>    
        <maven.compiler.source>1.8</maven.compiler.source>    
        <maven.compiler.target>1.8</maven.compiler.target>    
        <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>    
    </properties>    
</profile>

```
### 参考
[How to install Apache Maven on CentOS 7](https://linuxize.com/post/how-to-install-apache-maven-on-centos-7/)

## Docker

### 安装
` yum install -y docker `
### 设置
- 开机自启:
```bash
systemctl enable docker
```

### 参考
- [Get Docker Engine - Community for CentOS](https://docs.docker.com/install/linux/docker-ce/centos/)
- [解决 Docker 数据卷挂载的文件权限问题](https://padeoe.com/docker-volume-file-permission-problem/)

### 问题

#### 容器重启后无法启动
1. 检查 `selinux` 状态：`cat /etc/selinux/config` 需要和 docker 配置匹配(一般应该是开启状态 `enforcing`)
2. 重启服务器 `reboot` 

#### docker 挂载目录没有权限
有如下几种解决方案：
- 添加linux规则，把要挂载的目录添加到selinux白名单:
```bash
# 更改安全性文本的格式如下
chcon [-R] [-t type] [-u user] [-r role] 文件或者目录
 
选顷不参数： 
-R  ：该目录下的所有目录也同时修改； 
-t  ：后面接安全性本文的类型字段，例如 httpd_sys_content_t ； 
-u  ：后面接身份识别，例如 system_u； 
-r  ：后面街觇色，例如 system_r
```
执行：
```bash
chcon -Rt svirt_sandbox_file_t /home/xuhaixing/docker/tomcat/webapps/
```
- 在运行时加 --privileged=true:
```bash
docker run -d -p 9091:8080 -v /home/xuhaixing/docker/tomcat/webapps/:/usr/local/tomcat/webapps/ --privileged=true 
```

##### 参考
- [Docker -v 对挂载的目录没有权限 Permission denied](https://blog.csdn.net/u012326462/article/details/81038446)

## Lantern

### 安装
- 采用docker安装
```bash
docker run -itd --restart=always --name lantern -p 8877:3128 -p 8080:8080 wilon/lantern
```
- 测试  
  - 浏览器打开：http://0.0.0.0:8080/wilonlantern  
  - `curl -kvx 127.0.0.1:3128 https://www.google.com/humans.txt` 
    能看到 Google is built by a... 就是成功了！

### 参考
- [wilon/lantern](https://hub.docker.com/r/wilon/lantern)


## BaiduPCS-Go
BaiduPCS-Go 百度网盘客户端
> https://github.com/iikira/BaiduPCS-Go 

### 问题
#### 下载403问题
需要充值10块的普通会员

## Samba
### 作为客户端
1. 安装：`yum install -y cifs-utils`
2. 挂载目录：
```bash
mount -t cifs //192.168.100.2/C /mnt/smb -o username=zenandidi  #如果共享点带空格，请在空格前加上 “ \ ”
Password for zenandidi@//192.168.100.2/C:  ******************  #输入密码
```
3. 取消挂载：`umount /mnt/smb`
- **注意：挂载后的目录不能直接删除（会删除源文件），应该用`umount`**


## 其他
### 代理设置

#### 全局设置
```bash
# ~/.bashrc | ~/.zshrc 保存后执行 source ~/.zshrc
export http_proxy=127.0.0.1:3128 export https_proxy=127.0.0.1:3128
```
#### 临时
```bash
curl -x 127.0.0.1:8877 ....
```

### 重置密码
- [How To Reset Your Forgotten Root Password On CentOS 7 Servers](https://www.liberiangeek.net/2014/09/reset-forgotten-root-password-centos-7-servers/)

### SELinux

- [SELinux 入门](https://zhuanlan.zhihu.com/p/30483108)



### RAID
- [CentOS 7配置软RAID](https://yq.aliyun.com/articles/369791)

### 清理yum源
1. 删除源：`cd /etc/yum.repos.d`
2. 清理缓存：
```bash
yum clean all
yum makecache
```
#### 参考
- [清理yum源](https://www.cnblogs.com/zengkefu/p/5569820.html)