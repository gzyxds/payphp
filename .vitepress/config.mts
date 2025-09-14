import { defineConfig } from "vitepress";

export default defineConfig({
  ignoreDeadLinks: true,
  title: "码支付官网",
  description: "Payphp是行业领先的聚合码支付个人免签约支付平台，一站式接入网站收款api接口,支持支付宝，微信，财付通，QQ钱包，微信wap，银联支付，USDT支付，paypal，帮助开发者快速集成到自己相应产品，效率高，见效快，费率低！",
  head: [
    ['meta', { name: 'keywords', content: '易支付即时到账,支付系统源码,在线支付系统,聚合支付系统' }]
  ],

  themeConfig: {
    siteTitle: false, // 禁用网站标题显示，只显示logo
    logo: "/logo.svg", // logo图片地址
    lastUpdated: true,
    lastUpdatedText: "最后更新",
    sidebarMenuLabel: "目录",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/gzyxds/payphp"
      }
    ],
    editLink: {
      pattern: "https://github.com/gzyxds/payphp",
      text: "编辑本页"
    },
    nav: [
      {
        text: "🏠 网站首页", // 使用简洁的emoji图标配合文字
        link: "/"
      },

      {
        text: "📋 系统介绍", // 使用简洁的emoji图标配合文字
        link: "/help/index"
      },
      {
        text: "📚 商户文档", // 使用简洁的emoji图标配合文字
        link: "/merchant/index"
      },
      {
        text: "📊 商户中心", // 使用简洁的emoji图标配合文字
        link: "https://merch.payphp.cn/"
      },
      {
        text: "🌐 系统官网", // 使用简洁的emoji图标配合文字
        link: "https://payphp.cn/"
      },
      {
        text: "👥 商户Q群", // 使用简洁的emoji图标配合文字
        link: "https://qm.qq.com/cgi-bin/qm/qr?k=hiPJrntFaxlzcF6pJ4swHNrXGxbv16Ek&jump_from=webapi&authKey=w1QVa8tZUkbAZSL6EoQIaoko1frqj+a67i2SRMgWGe/UvB+i8bvse5CdCXF3wJKS"
      },
      {
        text: "💬 联系客服", // 使用简洁的emoji图标配合文字
        link: "https://qm.qq.com/q/l8HDomqX4I"
      }
    ],

    // 侧边栏配置 - 根据不同路径显示不同侧边栏
    sidebar: {
      // 根路径下的侧边栏
      '/': [
        {
          text: "🖥️帮助中心",
          collapsed: false,
          items: [
            {
              text: "🎉系统介绍",
              link: "/help/index"
            },
            {
              text: "🏅源码授权",
              link: "/help/shop"
            }
          ]
        },
        {
          text: "📖部署教程",
          collapsed: false,
          items: [
            {
              text: "✨环境需求",
              link: "/help/runtime"
            },
            {
              text: "🎨宝塔安装",
              link: "/help/Setup"
            },
            {
              text: "🔧 命令行工具",
              link: "/help/cli"
            },
            {
              text: "📝 附录",
              link: "/help/fl"
            }
          ]
        },
         {
          text: "📖云端教程",
          collapsed: false,
          items: [

            {
              text: "闲蛋自建云端",
              link: "/help/xyd"
            },
            {
              text: "靓仔自建云端",
              link: "/help/lzyd"
            },
            {
              text: "iPad自建云端x",
              link: "/help/ipad"
            },
            {
              text: "imac自建云端x",
              link: "/help/imac"
            }
          ]
        },
        {
          text: "🍵友情连接",
          collapsed: false,
          items: [
            {
              text: "🌩️优刻云",
              link: "https://www.cloudcvm.com"
            },
            {
              text: "💡艺创AI",
              link: "https://artaigc.cn/"
            },
            {
              text: "🎯AI创作",
              link: "https://www.cnai.art/"
            },
            {
              text: "📲172号卡",
              link: "https://www.urlka.cn"
            }
          ]
        }
      ],
      // merchant路径下的侧边栏
      '/merchant/': [
        {
          text: "🏪 商户中心",
          collapsed: false,
          items: [
            {
              text: "📋 商户概览",
              link: "/merchant/index"
            }
          ]
        },
        {
          text: "📱 监控端",
          collapsed: false,
          items: [
            {
              text: "📲 APP监控",
              link: "/merchant/fqa/jk/APP"
            },
            {
              text: "📱 X转发器",
              link: "/merchant/fqa/jk/x"
            },
            {
              text: "💻 PC三网监控",
              link: "/merchant/fqa/jk/pcxd"
            },
            {
              text: "🖥️ PC靓仔监控",
              link: "/merchant/fqa/jk/pclz"
            }
            ,
            {
              text: "💻 监控软件下载",
              link: "https://www.123865.com/s/AIVRVv-uwgJA"
            }
          ]
        },
        {
          text: "💳 通道管理",
          collapsed: false,
          items: [
            {
              text: "💰 商家账单",
              link: "/merchant/fqa/td/alipay"
            },
            {
              text: "🐧 QQ通道",
              link: "/merchant/fqa/td/qq"
            },
            {
              text: "💬 微信通道",
              link: "/merchant/fqa/td/wx"
            },
            {
              text: "💰 支付宝通道",
              link: "/merchant/fqa/td/zfb"
            },
            {
              text: "📱 闲蛋通道",
              link: "/merchant/fqa/td/xd"
            },
            {
              text: "👤 靓仔通道",
              link: "/merchant/fqa/td/lz"
            }
          ]
        },
        {
          text: "🔗 相关链接",
          collapsed: false,
          items: [
            {
              text: "📖 系统介绍",
              link: "/help/index"
            },
            {
              text: "🔧 环境要求",
              link: "/help/runtime"
            },
            {
              text: "🛠️ 安装部署",
              link: "/help/Setup"
            },
            {
              text: "📜 源码授权",
              link: "/help/shop"
            }
          ]
        },
        {
          text: "🍵友情连接",
          collapsed: false,
          items: [
            {
              text: "🌩️优刻云",
              link: "https://www.cloudcvm.com"
            },
            {
              text: "💡艺创AI",
              link: "https://artaigc.cn/"
            },
            {
              text: "🎯AI创作",
              link: "https://www.cnai.art/"
            },
            {
              text: "📲172号卡",
              link: "https://www.urlka.cn"
            }
          ]
        }
      ]
    },

    footer: {
      message: "赣ICP备2023002309号-8",
      copyright: "© 2024 PayPHP. 保留所有权利。"
    },
    prev: "上一篇",
    returnToTopLabel: "返回顶部",
    outline: {
      label: "本页目录", // 右侧大纲标题的中文显示
      level: [2, 6] // 显示h2到h6级别的标题
    },
    externalLinkIcon: true,
    i18nRouting: false,
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档"
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消"
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除"
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接"
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者"
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈"
                }
              }
            }
          },
          en: {
            placeholder: "Search docs",
            translations: {
              button: {
                buttonText: "Search docs",
                buttonAriaLabel: "Search docs"
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "Clear query",
                  resetButtonAriaLabel: "Clear query",
                  cancelButtonText: "Cancel",
                  cancelButtonAriaLabel: "Cancel"
                },
                startScreen: {
                  recentSearchesTitle: "Recent searches",
                  noRecentSearchesText: "No recent searches",
                  saveRecentSearchButtonTitle: "Save search",
                  removeRecentSearchButtonTitle: "Remove search",
                  favoriteSearchesTitle: "Favorites",
                  removeFavoriteSearchButtonTitle: "Remove from favorites"
                },
                errorScreen: {
                  titleText: "Unable to fetch results",
                  helpText: "You may want to check your network connection"
                },
                footer: {
                  selectText: "select",
                  navigateText: "navigate",
                  closeText: "close",
                  searchByText: "Search by"
                },
                noResultsScreen: {
                  noResultsText: "No results for",
                  suggestedQueryText: "You can try searching for",
                  reportMissingResultsText: "You think it should have results?",
                  reportMissingResultsLinkText: "Click here to report it"
                }
              }
            }
          }
        }
      }
    },
    langMenuLabel: "多语言",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    docFooter: {
      prev: "上一页",
      next: "下一页"
    }
  },
  srcDir: "./",
  assetsDir: "static",
  sitemap: {
    hostname: "https://payphp.cn",
    lastmodDateOnly: false
  },
  cacheDir: "./.vitepress/cache",
  titleTemplate: "易支付即时到账|支付系统源码|在线支付系统|免签约聚合支付系统|",
  lang: "zh-CN",
  base: "/",
  outDir: "./.vitepress/dist",
  cleanUrls: false,
  rewrites: {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md"
  },
  // VitePress 2.0 新增配置
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.includes('-')
      }
    }
  }
});




