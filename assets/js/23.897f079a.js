(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{293:function(e,t,a){"use strict";a.r(t);var s=a(38),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"安装centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装centos","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装centos")]),e._v(" "),a("h3",{attrs:{id:"制作系统u盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#制作系统u盘","aria-hidden":"true"}},[e._v("#")]),e._v(" 制作系统U盘")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("UltralOS工具\n装载iso镜像并写入硬盘镜像")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://jingyan.baidu.com/article/59703552b61eb78fc0074027.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),a("OutboundLink")],1)])])]),e._v(" "),a("h3",{attrs:{id:"修改label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改label","aria-hidden":"true"}},[e._v("#")]),e._v(" 修改LABEL")]),e._v(" "),a("ol",[a("li",[e._v("记住U盘在我的电脑中的标识（如"),a("code",[e._v("CentOS 7 x8")]),e._v("）")]),e._v(" "),a("li",[e._v("在首页选中"),a("em",[e._v("install CentOS7")]),e._v("后按"),a("code",[e._v("tab")]),e._v("再按"),a("code",[e._v("e")]),e._v("键修改配置信息：")])]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 注：\\x20 是空格")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LABEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("CentOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("x207"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("x20x86_64 rd.live.check quiet\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 改为： ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LABEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("CentOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("x207"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("x20x8 rd.live.check quiet                \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/lianshaohua/article/details/88381039",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),a("h4",{attrs:{id:"dev-root-does-not-exist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dev-root-does-not-exist","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("/dev/root does not exist")])]),e._v(" "),a("p",[a("strong",[e._v("按上面修改LABEL后，理论上没这个问题了")]),e._v("\n没有找到U盘，按照如下操作：")]),e._v(" "),a("ol",[a("li",[e._v("找u盘：\n将第二步中按TAB键之后出来的文字修改为："),a("code",[e._v(">vmlinuz initrd=initrd.img linux dd quiet")])]),e._v(" "),a("li",[e._v("在首页选中"),a("em",[e._v("install CentOS7")]),e._v("后按"),a("code",[e._v("tab")]),e._v("再按"),a("code",[e._v("e")]),e._v("键修改配置信息")]),e._v(" "),a("li",[e._v("修改信息：")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("initrd=initrd.imginst.stage2=hd:LABEL=CentOS\\x207\\x20x86_64 rd.live.check quiet\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("改为:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vmlinuz initrd=initrd.img inst.stage2=hd:/dev/sdc4 quite\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("修改完后按"),a("code",[e._v("ctrl-x")]),e._v("或者直接回车")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/hfyfpga/p/5789681.html2",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考1"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"install黑屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install黑屏","aria-hidden":"true"}},[e._v("#")]),e._v(" install黑屏")]),e._v(" "),a("p",[e._v("在台式机安装时碰到的问题，显示器问题。需如下操作：")]),e._v(" "),a("p",[a("strong",[e._v("Troubleshooting > Install Red Hat Enterprise Linux in basic graphics mode")])]),e._v(" "),a("p",[e._v("或者采用"),a("code",[e._v("text")]),e._v("模式安装：添加启动参数")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nomodeset text\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h5",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html-single/installation_guide/index",target:"_blank",rel:"noopener noreferrer"}},[e._v("Red Hat INSTALLATION GUIDE"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://unix.stackexchange.com/questions/353896/linux-install-goes-to-blank-screen",target:"_blank",rel:"noopener noreferrer"}},[e._v("linux-install-goes-to-blank-screen"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"系统配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 系统配置")]),e._v(" "),a("h3",{attrs:{id:"不自动休眠"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不自动休眠","aria-hidden":"true"}},[e._v("#")]),e._v(" 不自动休眠")]),e._v(" "),a("p",[e._v("笔记本自动合上盖子会休眠，需配置下")]),e._v(" "),a("h4",{attrs:{id:"配置说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置说明","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置说明")]),e._v(" "),a("blockquote",[a("p",[e._v("HandlePowerKey         按下电源键后的行为，默认power off\nHandleSleepKey          按下挂起键后的行为，默认suspend\nHandleHibernateKey   按下休眠键后的行为，默认hibernate\nHandleLidSwitch          合上笔记本盖后的行为，默认suspend")])]),e._v(" "),a("h4",{attrs:{id:"修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 修改配置")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# /etc/systemd/logind.conf\nHandleLidSwitch=lock\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("后面的配置项的可选范围为：")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("ignore")]),e._v(" 忽略，跳过\n"),a("code",[e._v("power off")]),e._v(" 关机\n"),a("code",[e._v("eboot")]),e._v(" 重启\n"),a("code",[e._v("halt")]),e._v(" 挂起\n"),a("code",[e._v("suspend shell")]),e._v(" 内建指令，可暂停目前正在执行的shell。若要恢复，则必须使用SIGCONT信息。所有的进程都会暂停，但不是消失（halt是进程关闭）\n"),a("code",[e._v("hibernate")]),e._v(" 让笔记本进入休眠状态\n"),a("code",[e._v("hybrid-sleep")]),e._v(" 混合睡眠，主要是为台式机设计的，是睡眠和休眠的结合体，当你选择Hybird时，系统会像休眠一样把内存里的数据从头到尾复制到硬盘里 ，然后进入睡眠状态，即内存和CPU还是活动的，其他设置不活动，这样你想用电脑时就可以快速恢复到之前的状态了，笔记本一般不用这个功能。\n"),a("code",[e._v("lock")]),e._v(" 仅锁屏，计算机继续工作。")])]),e._v(" "),a("h4",{attrs:{id:"配置生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置生效","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置生效")]),e._v(" "),a("p",[a("code",[e._v("systemctl restart systemd-logind")])])])},[],!1,null,null,null);t.default=n.exports}}]);