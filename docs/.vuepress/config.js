const sidebar = require('./sidebar.js')


module.exports = {
    title: "ALonG",
    discription: "ALonG的博客,blog",
    head: [
        ['link', { rel: 'icon', href: '/icon/ALONG.png' }]
    ],
    markdown: {
        lineNumbers: true
    },
    extraWatchFiles: [
        './sidebar.js'
    ],
    themeConfig: {
        // logo: 'logo.png',
        repo: 'longhaoxuan/blog',
        nav: [
            { text: '博客', link: '/blog/' },
            { text: '随笔', link: '/note/' }
        ],
        sidebarDepth: 3,
        sidebar,
        lastUpdated: "更新时间",
    },
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/back-to-top', true],
        ['@vuepress/last-updated']
    ],

}