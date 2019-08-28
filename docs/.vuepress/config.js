const linux = require('../linux');
const blog = require('../blog');
const introduce = require('../introduce');
const java  = require('../java');

module.exports = {
    title: 'Superzxc 笔记本',
    description: '工作和学习过程中的笔记，汇总成册方便查阅',
    base: '/note-book/',// 项目名
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        docsDir: 'docs',
        // sidebarDepth: 3, // 嵌套标题侧边栏提取深度，最大为 2，会提取到 h3
        nav: [
            {text: 'Home', link: '/'},
            {text: 'linxu 笔记', link: '/linux/'},
            {text: 'java 笔记', link: '/java/'},
            {text: '博客文章', link: '/blog/'},
        ],
        sidebar: {
            '/linux/':linux(),
            '/blog/':blog(),
            '/introduce/':introduce(),
            '/java/':java()
        }

    }
}