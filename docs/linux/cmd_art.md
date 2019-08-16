# 命令行的艺术
## 记一些有用的命令行工具
- 来自[命令行的艺术](https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md)

### 日常
- `ctrl-r`
>  在 Bash 中，可以通过按 **Tab** 键实现自动补全参数，使用 **ctrl-r** 搜索命令行历史记录（按下按键之后，输入关键字便可以搜索，重复按下 **ctrl-r** 会向后查找匹配项，按下 **Enter** 键会执行当前匹配的命令，而按下右方向键会将匹配项放入当前行中，不会直接执行，以便做出修改）。

- `history`
>  键入 `history` 查看命令行历史记录，再用 `!n`（`n` 是命令编号）就可以再次执行。其中有许多缩写，最有用的大概就是 `!$`， 它用于指代上次键入的参数，而 `!!` 可以指代上次键入的命令了（参考 man 页面中的“HISTORY EXPANSION”）。不过这些功能，你也可以通过快捷键 **ctrl-r** 和 **alt-.** 来实现。

- `alias`
>  使用 `alias` 来创建常用命令的快捷形式。例如：`alias ll='ls -latr'` 创建了一个新的命令别名 `ll`。
- `python -m http.server 7777`
>  将 web 服务器上当前目录下所有的文件（以及子目录）暴露给你所处网络的所有用户，使用：
`python -m SimpleHTTPServer 7777` （使用端口 7777 和 Python 2）或`python -m http.server 7777` （使用端口 7777 和 Python 3）。

- curl v2en.co/cool
> 命令行查单词   
> [哪些命令行工具让你相见恨晚](https://www.zhihu.com/question/41115077/answer/724683831)

## ssh

### 参考
- [SSH原理与运用](http://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html)
- [端口转发](http://www.ruanyifeng.com/blog/2011/12/ssh_port_forwarding.html)

## [you-get](https://github.com/soimort/you-get)
> You-Get is a tiny command-line utility to download media contents (videos, audios, images) from the Web, in case there is no other handy way to do it.  
支持几乎所有视频网站，包括优酷、土豆、爱奇艺等

### 安装
- 本体安装
```
pip3 install you-get
```
- 依赖安装
    - [ffmpeg](https://www.jianshu.com/p/2b98e0f87720)

### 使用
获取所有质量和格式:
```
you-get -i 'https://www.youtube.com/watch?v=jNQXAC9IVRw'
```
直接下载：
```
you-get 'https://www.youtube.com/watch?v=jNQXAC9IVRw'
```

## xargs

### 示例
- 批量转换mp4 to mp3
``` bash
ls *.mp4 | xargs --max-procs 0 -I file sh -c 'ffmpeg -i file ./mp3/file.mp3'
```

### 参考
- [xargs 命令教程](http://www.ruanyifeng.com/blog/2019/08/xargs-tutorial.html)

## ZIP

### 安装
` yum install -y zip`
### 使用
- 压缩
`zip -r foo.zip ./foo`
- 解压缩
`unzip foo.zip`
## ffmpeg

### MP4 to MP3
```
ffmpeg -i *.mp4 *.mp3
```

## [frp](https://github.com/fatedier/frp)
> A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.

