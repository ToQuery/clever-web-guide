/**
 * vue-press config
 */
module.exports = {
  title: 'Clever Framework Guide',
  description: 'Clever Framework Guide',
  repo: 'ToQuery/clever-framework',
  editLinks: true,
  docsDir: 'docs',
  dest: 'dist',
  editLinkText: '帮助我们改善此页面！',
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