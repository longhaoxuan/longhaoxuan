// const path = require("path")
const glob = require('glob')
const blogs = glob.sync("./docs/blog/**/*.md")
bloglist = []
map = {}
for (let item of blogs) {
    if (/.blog\/+([^\/]+)\/+([^\/]+)\.md$/g.test(item) == true) {
        if (!map[RegExp.$1]) {
            bloglist.push({
                title: RegExp.$1,
                children: [RegExp.$1+"/"+RegExp.$2]
            })
        } else {
            for (let i = 0; i < bloglist.length; i++) {
                if (bloglist[i].title == RegExp.$1) {
                    bloglist[i].children.push(RegExp.$1+"/"+RegExp.$2)
                    break;
                }
            }
        }
        console.log("问题很有弹奏"+RegExp.$1+"/"+RegExp.$2)
    }
}


module.exports ={
    '/blog/': bloglist
} 