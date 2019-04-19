//fs
const fs = require("fs");
//读取文件
const data = fs.readFileSync("./config.js"); //同步读取，会阻塞，这步不执行完，不执行下一步
console.log("同步的data", data)
fs.readFile("./config.js", (err, data) => {
    if (err) {
        console.log(err, "读取错误")
    } else {
        console.log("异步的data", data);
    }

})
// promise
const {
    promisify
} = require("util");
const readFile = promisify(fs.readFile);
readFile("./config.js").then(data => console.log(data));