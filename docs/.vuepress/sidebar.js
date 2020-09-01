// const path = require("path")
const glob = require('glob')
const blogs = glob.sync("./docs/blog/**/*.md")
const notes = glob.sync("./docs/note/*.md")
let bloglist = []
let map = {}
for (let item of blogs) {
    if (/.blog\/+([^\/]+)\/+([^\/]+)\.md$/g.test(item) == true) {
        if (!map[RegExp.$1]) {
            bloglist.push({
                title: RegExp.$1,
                children: [RegExp.$1 + "/" + RegExp.$2]
            })
        } else {
            for (let i = 0; i < bloglist.length; i++) {
                if (bloglist[i].title == RegExp.$1) {
                    bloglist[i].children.push(RegExp.$1 + "/" + RegExp.$2)
                    break;
                }
            }
        }
    }
}


let notelist = ['']

for (let item of notes) {
    if (/([^\/]+)\.md$/g.test(item) == true && RegExp.$1 != 'README') {
        notelist.push(RegExp.$1)
        // console.log("问题" + RegExp.$1)
    }
}

module.exports = {
    '/blog/': bloglist,
    "/note/": notelist  
} 