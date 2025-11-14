module.exports = {
  title: '个人知识库',
  description: '基于VuePress的知识管理框架',
  theme: 'vdoing',
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '分类导航',
        link: '/categories/'
      },
      {
        text: '日常记录',
        link: '/study/'
      },
      { text: '关于', link: '/about/' }
    ],
    // 侧边栏配置 - 会根据页面结构自动生成
    sidebarDepth: 2,
    sidebar: 'structuring',
    // 页面底部信息
    footer: {
      createYear: 2025,
      copyrightInfo: 'MIT Licensed | Copyright © 2025'
    },
    // 作者信息
    author: {
      name: 'new-info',
      link: 'https://github.com/'
    },
    // 博客配置
    blogInfo: {
      blogger: 'new-info',
      avatar: '/img/logo.png'
    },
    // 最后更新时间
    lastUpdated: '上次更新',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 目录结构
    category: true,
    tag: true,
    archive: true
  },
  // Markdown配置
  markdown: {
    lineNumbers: true
  },
  // 插件配置
  plugins: [
    ['thirdparty-search', {
      thirdparty: [
        {
          title: '在 copilot 中搜索',
          frontUrl: 'https://copilot.microsoft.com/',
        }
      ]
    }],
    ['vuepress-plugin-baidu-autopush'],
    ['one-click-copy', {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      copyMessage: '复制成功',
      duration: 1000,
      showInMobile: false
    }],
    ['demo-block', {
      settings: {
        jsfiddle: false,
        codepen: true,
        horizontal: false
      }
    }],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          clientID: 'Ov23liXDdqVlJCCAPHGJ',
          clientSecret: '517ee10477c7b2a1cce518b52e1c0772adc25021',
          repo: 'vuepress-blog', // GitHub 仓库
          owner: 'new-info', // GitHub仓库所有者
          admin: ['new-info'], // 对仓库有写权限的人
          distractionFreeMode: false,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path || "").slice(-16) %>', // 页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>' // GitHub issue 的内容
        }
      }
    ]
  ]
}
