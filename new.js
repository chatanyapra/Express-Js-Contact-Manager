const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require("url");

const server = http.createServer((req, res) => {
    const parse = url.parse(req.url, true);
    console.log("parse : ", parse);
    console.log("data : ", JSON.stringify(parse.query));
    const pathname = parse.pathname;
    switch (pathname) {
        case "/":
            console.log(parse.query, pathname);
            fs.appendFile("index.txt", `query data: ${JSON.stringify(parse.query)} | pathname:  ${parse.pathname}`, (err) => {
                console.log(err);
            })
            res.end("Accepted data")
            break;
        case "/about":
            console.log(parse.query, pathname);
            fs.appendFile("index.txt", `query data: ${JSON.stringify(parse.query)} | pathname:  ${parse.pathname}`, (err) => {
                console.log(err);
            })
            res.end("Accepted about data")
            // res.end(parse.query, pathname)
            break;
        default:
            console.log(parse.query, pathname);
            res.end("rejected data")
            break;
    }
})
server.listen(3000, () => {
    // console.log("Server Started", 3000);
})

setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => console.log('nextTick'));
console.log('start');
const { add } = require("./test.js");
add();