const introduce = require('../introduce');

module.exports = {
    title: '笔记本',
    description: '记录工作学习点滴',
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
        sidebar: 'auto',
        sidebarDepth: 3, // 嵌套标题侧边栏提取深度，最大为 2，会提取到 h3
        nav: [
            { text: 'Home', link: '/' },
            {
                text: '了解更多', items: [
                    { text: '项目介绍', link: '/introduce/' }
                ]
            }
        ],
        sidebar: {
            '/introduce/': introduce()
        }

    }
}