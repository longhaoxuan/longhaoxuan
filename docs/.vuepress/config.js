const sidebar = require('./sidebar.js')
console.log("标签"+JSON.stringify(sidebar))
module.exports = {
    title: "AlonG",
    discription: "ALonG的博客,blog",
    head: [
        ['link', { rel: 'icon', href: '/ALONG.png' }]
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
            { text: '日记', link: '/node/' }
        ],
        sidebar

    }

}