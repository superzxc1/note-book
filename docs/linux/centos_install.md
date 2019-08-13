
## 安装centos
### 制作系统U盘
- UltralOS工具 
装载iso镜像并写入硬盘镜像

- [参考](https://jingyan.baidu.com/article/59703552b61eb78fc0074027.html)

### 修改LABEL

1. 记住U盘在我的电脑中的标识（如`CentOS 7 x8`）
2. 在首页选中*install CentOS7*后按`tab`再按`e`键修改配置信息：
```bash
# 注：\x20 是空格
... LABEL=CentOS\x207\x20x86_64 rd.live.check quiet
# 改为： 
... LABEL=CentOS\x207\x20x8 rd.live.check quiet                
```

- [参考](https://blog.csdn.net/lianshaohua/article/details/88381039)
### 问题
#### `/dev/root does not exist`
没有找到U盘，按照如下操作：
1. 找u盘：
将第二步中按TAB键之后出来的文字修改为：`>vmlinuz initrd=initrd.img linux dd quiet`
2. 在首页选中*install CentOS7*后按`tab`再按`e`键修改配置信息
3. 修改信息：
```
initrd=initrd.imginst.stage2=hd:LABEL=CentOS\x207\x20x86_64 rd.live.check quiet
```
改为:
```
vmlinuz initrd=initrd.img inst.stage2=hd:/dev/sdc4 quite
```
4. 修改完后按`ctrl-x`或者直接回车

- [参考1](https://www.cnblogs.com/hfyfpga/p/5789681.html2)

#### install黑屏

在台式机安装时碰到的问题，显示器问题。需如下操作：

**Troubleshooting > Install Red Hat Enterprise Linux in basic graphics mode**

或者采用`text`模式安装：添加启动参数
```
nomodeset text
```
##### 参考
- [Red Hat INSTALLATION GUIDE](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html-single/installation_guide/index)
- [linux-install-goes-to-blank-screen](https://unix.stackexchange.com/questions/353896/linux-install-goes-to-blank-screen)

## 系统配置

### 不自动休眠
笔记本自动合上盖子会休眠，需配置下
#### 配置说明
> HandlePowerKey         按下电源键后的行为，默认power off
> HandleSleepKey          按下挂起键后的行为，默认suspend
> HandleHibernateKey   按下休眠键后的行为，默认hibernate
> HandleLidSwitch          合上笔记本盖后的行为，默认suspend
#### 修改配置
```
# /etc/systemd/logind.conf
HandleLidSwitch=lock
```
后面的配置项的可选范围为：
> `ignore` 忽略，跳过
> `power off` 关机
> `eboot` 重启
> `halt` 挂起
> `suspend shell` 内建指令，可暂停目前正在执行的shell。若要恢复，则必须使用SIGCONT信息。所有的进程都会暂停，但不是消失（halt是进程关闭）
> `hibernate` 让笔记本进入休眠状态
> `hybrid-sleep` 混合睡眠，主要是为台式机设计的，是睡眠和休眠的结合体，当你选择Hybird时，系统会像休眠一样把内存里的数据从头到尾复制到硬盘里 ，然后进入睡眠状态，即内存和CPU还是活动的，其他设置不活动，这样你想用电脑时就可以快速恢复到之前的状态了，笔记本一般不用这个功能。
> `lock` 仅锁屏，计算机继续工作。

#### 配置生效
`systemctl restart systemd-logind`