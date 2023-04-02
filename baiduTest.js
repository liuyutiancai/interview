// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void async function () {
//     // Write your code here
//     while(line = await readline()){
//         let tokens = line.split(' ');
//         let a = parseInt(tokens[0]);
//         let b = parseInt(tokens[1]);
//         console.log(a);
//         console.log(b);
//     }
// }()



// 本题为考试多行输入输出规范示例，无需提交，不计分。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    var n = parseInt(await readline());
    var ans = 0;
    for(var i = 0;i < n; i++){
        lines = (await readline()).split(" ");
        for(var j = 0;j < lines.length; j++){
            ans += parseInt(lines[j]);
        }
    }
    console.log(ans);
}()