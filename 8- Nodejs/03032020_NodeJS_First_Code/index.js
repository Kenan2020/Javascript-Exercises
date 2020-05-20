const http = require("http")
const path = require("path")
const fs = require("fs")
const dotenv = require("dotenv")

const server = http.createServer((req, res) => {
    //Build file path: make the file path dynamic
    let filePath = path.join(__dirname, "public",
        req.url === "/" ? "index.html" : req.url)
    //Exteniton of file
    let extName = path.extname(filePath)
    //console.log(filePath, extName)
    //Initate default content type
    let contentType = "text/html"
    //check ext and set content type
    switch (extName) {
        case ".css":
            contentType = "text/css"
            break;
        case ".png":
            contentType = "image/png"
            break;
        case ".js":
            contentType = "text/javascript"
            break;
        case ".json":
            contentType = "application/json"
            break;
    }
    //check if the contentType is text/html  and the extName is "", add <div className="html"
    if (contentType == "text/html" && extName == "") filePath += ".html"
    //log the filePath
    console.log(filePath)
    //Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == "ENOENT") {
                //Page not found
                fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
                    res.writeHead(404, {
                        "Content-Type": "text/html"
                    })
                    res.end(content, "utf8")
                })
            } else {
                //some server Error
                res.writeHead(500)
                res.end(`Server Error : ${err.code}`)
            }
        } else {
            //Success
            res.writeHead(200, {
                "Content-Type": contentType
            })
            res.end(content, "utf8")
        }
    })
})

dotenv.config()
console.log(process.env.PORT)
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})