// require这些东西都是调用node环境中的包，只要有node环境，这些require的模块都是默认被安装进去了，就可以直接这样写
// node支持ES6的写法，下面的就是ES6的写法，不需要额外使用插件来把ES6转ES5，很方便

let http = require('http')
let url = require('url')
let util = require('util')
let fs = require('fs')

// http库是node提供的api，可以直接上node的中文网，直接看到各种api
let server = http.createServer((req, res) => {

    // 通过你在浏览器输入的网站，利用url.parse进行解析成一个对象，再读取其中pathname的属性
// 例如你输入http://localhost:8080/index.html，然后url.parse(req.url).pathname返回的值为 "/index.html"
    var pathname = url.parse(req.url).pathname
    console.log('file:' + pathname.substring(1))
    // fs，文件系统，读取文件
    fs.readFile(pathname.substring(1), (err, data) => {
        if (err) {
            // 错误就返回404状态码
            res.writeHead(404, {
                'Content-Type': 'text/html'
            })
        } else {
            // 成功读取文件
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            // 展示文件数据
            res.write(data.toString())
        }
        // 注意，这个end 一定要放在读取文件的内部使用
        // res.end(util.inspect(url.parse(req.url)))
    })
})

server.listen(3000, '127.0.0.1', () => {
    console.log('服务器已经运行，请打开浏览器，输入：http://127.0.0.1:3000/来访问')
})