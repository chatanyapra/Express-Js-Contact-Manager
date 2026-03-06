const fs = require("fs");
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    console.log(res.write("Hello"));
    res.end("Hello World");
    let body = ""; req.on("data", chunk => body += chunk); req.on("end", () => JSON.parse(body));
});

server.listen(3000, () => {
    // console.log("HHHHHHHHIIIIIIIII");
})


// fs.writeFile("dummy.txt", "Hello Here is section FC", (err) => {
//     if (err) console.log(err);
//     else console.log("File written");
// });
// fs.readFile("dummy.txt", "utf8", (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
// });

// const stream = fs.createReadStream("dummy.txt", {
//     encoding: "utf8",
//     // highWaterMark: 5
// })
// stream.on("data", chunk => {
//     console.log(chunk);
// })

// for (let ch of " Hello") {
//     fs.appendFileSync("dummy.txt", ch);
// }

// ["Hello", "Node", "JS"].forEach(word => {
//     fs.appendFile("dummy.txt", word + " ", () => { });
// });
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.question("Enter Text:", (input) => {
//     fs.writeFile("dummy.txt", input, () => {
//         console.log(" Input : ", input);
//         rl.close();
//     })
// })
// const readline = require("readline");
// // const fs = require("fs");

// const stream = fs.createWriteStream("input.txt");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.on("line", line => {
//     stream.write(line + "\n");
// });
// console.log(fs.readdirSync("./"));
// console.log(fs.mkdirSync("data"));
// fs.writeFileSync("test.txt", "Hello Worl000d");
// const data = fs.readFileSync("test.txt", "utf8");
// console.log(data);

// const fd = fs.openSync("file.txt", "r+");
// fs.writeSync(fd, "Hello");
// fs.closeSync(fd);
// const data = fs.readFileSync("test.txt", "utf8");
// console.log(data);

fs.readFile("server.js", "utf8", (err, data) => {
    // console.log(data);

    // res.end(data);
});
const path = require('path');
const filePath = path.join(__dirname, "pages", "home.html");