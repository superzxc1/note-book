# 常用

## 同步时间
- `ntpdate -u ntp1.aliyun.com`

## 设置网卡
1. ip addr确认网卡名称
2. /etc/sysconfig/network-scripts/ifcfg-xxx，这个xxx就是上面网卡名称
3. 编辑该网卡配置，最后systemctl restart network

## 检查硬盘
主要以下几部：

1. df -h 先看下目前系统的挂载是否和申请的硬盘大小一致，然后是否是LVM的
2. fdisk -l 看下目前系统的磁盘分区情况
3. 如需要格式化 mkfs.xfs /dev/sda3
4. 创建逻辑分区 pvcreate /dev/sdb
5. 是否卷组需要扩容，vgdisplay看下
6. vgextend centos /dev/sdb 指的是将centos这个卷组用后面的分区扩容，这个centos是用vgdisplay命令得到的
7. 接下来我们就扩容到我们的根分区下，用之前df -h 看到的根目录对应地址
8. lvextend -l+100%FREE /dev/mapper/centos-root
9. xfs_growfs /dev/mapper/centos-root，最后一步确认df -h看下
- 参考 https://www.cnblogs.com/Sungeek/p/9084510.html 
