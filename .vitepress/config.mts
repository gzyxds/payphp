import { defineConfig } from "vitepress";
	export default defineConfig({
  "title": "码支付",
  "description": "码支付平台, 支付平台, 支付, 支付网关, 支付接口, 支付服务",
  "themeConfig": {
    "siteTitle": false,
    "logo": "https://payphp.oss-cn-shenzhen.aliyuncs.com/paylogo.svg",
    "outDir": "docs",
    "lastUpdated": true,
    "sidebarMenuLabel": "目录",
    "socialLinks": [
      {
        "icon": "Payphp",
        "link": "https://github.com/gzyxds/maovideo"
      }
    ],
    "editLink": {
      "pattern": "https://github.com/gzyxds/payphp",
      "text": "编辑本页"
    },
    "nav": [
      {
        "text": "🖥网站首页",
        "link": "/"
      },
      {
        "text": "💹商户中心",
        "link": "https://www.payphp.cn/User/Login/Index"
      },
      {
        "text": "🍵商户Q群",
        "link": "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=pzEdJWFE4HZILcT0W6oQRzbOkssMNIPO&authKey=%2BsgNMPOiqreGqWHmBvfK2Sli1%2FvwF%2FnvykPpB0LBF5wuwrWWp8Ogst9mGZYuuNqE&noverify=0&group_code=1037205629
"
      },
      {
        "text": "💬联系客服",
        "link": "https://qm.qq.com/q/l8HDomqX4I"
      },
      {
        "text": "🎉系统介绍",
        "link": "/global/index"
      }
    ],

    "sidebar": [  // 侧边栏配置
      {
        "text": "🖥️帮助中心",
        "collapsed": false,
        "items": [
          {
            "text": "🎉系统介绍",
            "link": "/global/index"
          },
          {
            "text": "🏅源码授权",
            "link": "/global/shop"
          }
        ]
      },
      {
        "text": "📖部署教程",
        "collapsed": false,
        "items": [
          {
            "text": "✨环境需求",
            "link": "/global/runtime"
          },
          {
            "text": "🎨宝塔安装",
            "link": "/global/Setup"
          }
        ]
      },
      {
        "text": "🍵友情连接",
        "collapsed": false,
        "items": [
          {
            "text": "📫枭格科技",
            "link": "http://www.xgphp.cn/"
          },
          {
            "text": "☁优刻云",
            "link": "https://www.cloudcvm.com/"
          },
          {
            "text": "🎉AI创作",
            "link": "https://comnew.cn/"
          },
          {
            "text": "🎨AIGC系统",
            "link": "https://docs.xgphp.cn/"
          },
          {
            "text": "👀CodePu",
            "link": "http://www.codepu.cn/"
          }
        ]
      }
    ],
    "footer": {
      "message": "Released under the Payphp.cn Public License.",
      "copyright": "Copyright © 2024-Payphp.cn All Rights Reserved"
    },
    "prev": "上一篇",
    "returnToTopLabel": "返回顶部",
    "outline": "目录",
    "externalLinkIcon": true,
    "i18nRouting": false,
    "search": {
      "provider": "local",
      "options": {
        "appId": "",
        "apiKey": "",
        "indexName": "",
        "locales": {
          "zh": {
            "placeholder": "搜索文档",
            "translations": {
              "button": {
                "buttonText": "搜索文档",
                "buttonAriaLabel": "搜索文档"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "清除查询条件",
                  "resetButtonAriaLabel": "清除查询条件",
                  "cancelButtonText": "取消",
                  "cancelButtonAriaLabel": "取消"
                },
                "startScreen": {
                  "recentSearchesTitle": "搜索历史",
                  "noRecentSearchesText": "没有搜索历史",
                  "saveRecentSearchButtonTitle": "保存至搜索历史",
                  "removeRecentSearchButtonTitle": "从搜索历史中移除",
                  "favoriteSearchesTitle": "收藏",
                  "removeFavoriteSearchButtonTitle": "从收藏中移除"
                },
                "errorScreen": {
                  "titleText": "无法获取结果",
                  "helpText": "你可能需要检查你的网络连接"
                },
                "footer": {
                  "selectText": "选择",
                  "navigateText": "切换",
                  "closeText": "关闭",
                  "searchByText": "搜索提供者"
                },
                "noResultsScreen": {
                  "noResultsText": "无法找到相关结果",
                  "suggestedQueryText": "你可以尝试查询",
                  "reportMissingResultsText": "你认为该查询应该有结果？",
                  "reportMissingResultsLinkText": "点击反馈"
                }
              }
            }
          },
          "en": {
            "placeholder": "Search docs",
            "translations": {
              "button": {
                "buttonText": "Search docs",
                "buttonAriaLabel": "Search docs"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "Clear query",
                  "resetButtonAriaLabel": "Clear query",
                  "cancelButtonText": "Cancel",
                  "cancelButtonAriaLabel": "Cancel"
                },
                "startScreen": {
                  "recentSearchesTitle": "Recent searches",
                  "noRecentSearchesText": "No recent searches",
                  "saveRecentSearchButtonTitle": "Save search",
                  "removeRecentSearchButtonTitle": "Remove search",
                  "favoriteSearchesTitle": "Favorites",
                  "removeFavoriteSearchButtonTitle": "Remove from favorites"
                },
                "errorScreen": {
                  "titleText": "Unable to fetch results",
                  "helpText": "You may want to check your network connection"
                },
                "footer": {
                  "selectText": "select",
                  "navigateText": "navigate",
                  "closeText": "close",
                  "searchByText": "Search by"
                },
                "noResultsScreen": {
                  "noResultsText": "No results for",
                  "suggestedQueryText": "You can try searching for",
                  "reportMissingResultsText": "You think it should have results?",
                  "reportMissingResultsLinkText": "Click here to report it"
                }
              }
            }
          }
        }
      }
    },
    "langMenuLabel": "多语言",
    "darkModeSwitchLabel": "主题",
    "lightModeSwitchTitle": "切换到浅色模式",
    "darkModeSwitchTitle": "切换到深色模式",
    "docFooter": {
      "prev": "上一页",
      "next": "下一页"
    }
  },
  "srcDir": "./",
  "assetsDir": "static",
  "sitemap": {
    "hostname": "https://payphp.cn",
    "lastmodDateOnly": false
  },
  "locales": {},
  "cacheDir": "./.vitepress/cache",
  "titleTemplate": "聚合支付系统",
  "lang": "en-US",
  "base": "/",
  "outDir": "./.vitepress/dist",
  "cleanUrls": false,
  "rewrites": {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md"
  }
});
