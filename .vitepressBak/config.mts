import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "码支付", // 网站标题
  description: "码支付平台, 支付平台, 支付, 支付网关, 支付接口, 支付服务",
  themeConfig: {

    
    "siteTitle": false, // 网站标题
    
    logo: 'https://payphp.oss-cn-shenzhen.aliyuncs.com/paylogo.svg', // logo

    // // 搜索
    // search: {
    //   provider: 'local'
    // },

    // 生成静态文件
    outDir: 'docs',
    lastUpdated: true,
    sidebarMenuLabel: '目录',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gzyxds/maovideo' }
    ],

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/gzyxds/maovideo',
      text: '编辑本页'
    },


    // https://vitepress.dev/reference/default-theme-config

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '商户中心', link: '/Examples' }
    ],


    // 左侧菜单
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [  // 社交链接
      { icon: 'github', link: 'https://github.com/gzyxds/maovideo' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MaoVideo Public License.',
      copyright: 'Copyright © 2024-MAOVIDEO All Rights Reserved'
    },
    
     prev  : '上一篇', // 上一篇

     returnToTopLabel : '返回顶部', // 返回顶部

     outline : '目录', // 目录

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gzyxds/maovideo' }
    ]
  }
})
