# 关于笔记
本项目借鉴 [Mrcode 笔记本](https://zq99299.github.io/note-book/) ,如有兴趣可以参考 [这里](https://zq99299.github.io/note-book/introduce/vue-press.html#%E5%88%9D%E4%BD%93%E9%AA%8C) 开始搭建  


## [MarkDown](https://zh.wikipedia.org/wiki/Markdown)
> Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。  
语法简单并且能有简洁美观的效果，非常适合程序员做笔记

### 手风琴
例：  
<details open>
<summary>title</summary>
this is details

</details>
写法：

```html
<details open>
<summary>title</summary>
this is details

</details>
```

## [vscode-paste-image](https://github.com/mushanshitiancai/vscode-paste-image)
vscode 插件，粘贴图片非常方便：
![](https://raw.githubusercontent.com/mushanshitiancai/vscode-paste-image/master/res/vscode-paste-image.gif)

- [Remote 支持](https://github.com/mushanshitiancai/vscode-paste-image/issues/44)

## 持续集成
本文档采用 [Travis](https://www.travis-ci.org/) 持续集成

- `.travis.yml` 配置
```yml
language: node_js
sudo: required
node_js:
  - "lts/*"
cache:
  directories:
    - node_modules
script:
  - ./deploy.sh
branch: master
```

- `deploy.sh` 配置
```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'note.zxc66.site' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:superzxc1/note-book.git master:gh-pages

# 如果使用 travis 持续集成
git push -f https://${access_token}@github.com/superzxc1/note-book.git master:gh-pages

cd -
```
### 参考
- [VuePress + github pages + Travis CI 教程](https://www.jianshu.com/p/a7435b8bc8bc)
- [阮一峰 Travis CI 教程](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)