const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on('line',(line) => {
    let n = [...new Set(line.slice(2))].map((value) => parseInt(value))
    let max = 0,result = []
    result.push(n[0])
    for(let i = 1; i < n.length;i++){
        if(n[i] > n[i - 1]){
            result.push(n[i])
        }
        if(n[i] > n[max]){
            result = []
            result.push(n[i])
            // max1 = max
            max = i
            // flag = i + 1
            // result.push(n[i++])
        }
    }
    console.log(result);
})