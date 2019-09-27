# Tomcat 笔记

## 日志拆分
### 使用linux自带的logrotate  

1. 创建文件

```bash
vi /etc/logrotate.d/tomcat
```
2. 拷贝一下内容到上面这个文件

```
/usr/share/apache-tomcat-8/logs/catalina.out {
	copytruncate
	daily
	rotate 7
	compress
	missingok
	size 5M
}
```
- 上面这个文件配置：
  - 确定 `/usr/share/apache-tomcat-8/logs/catalina.out` 就是你的tomcat的catalina.out路径
  - `daily` - 每天切换 catalina.out
  - `rotate` - 保持最多7个日志文件
  - `compress` - 对切换出来的日志文件压缩
  - `size` - 如果catalina.out文件大于5M，执行切换操作
### 参考
- [tomcat 日志拆分](http://blog.bo.run/2016/03/04/tomcat-catalina-out-space-issue/)