/**
 * vue-press config
 */
module.exports = {
  title: 'Clever Web Guide',
  description: 'Clever Web Guide',
  repo: 'ToQuery/CleverWeb',
  editLinks: true,
  base: '/CleverWeb/',
  docsDir: 'docs',
  dest: 'dist',
  editLinkText: '帮助我们改善此页面。',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '指南', link: '/guide/'},
      {
        text: '组件',
        items: [
          {text: 'dao', link: '/components/dao/'}
        ]
      },
      {text: '参考', link: '/refer/'}
    ],
    sidebar: 'auto',
    lastUpdated: 'Last Updated'
  }
}