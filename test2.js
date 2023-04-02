// 小红书笔试第二题
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num = 0
let N, arr = [],operNum, l = [],r = [], oper = [],o = []
rl.on('line',(line) => {
    if(num === 0){
        N = line
        num++
    }else if(num === 1){
        for(let i = 0; i < line.length;i += 2){
            arr.push(line[i] - 0)
        }
        num++
    }else if(num === 2){
        operNum = line
        num++
    }else if(num === 3){
        for(let i = 0; i < line.length;i += 2){
            l.push(line[i] - 0)
        }
        num++
    }else if(num === 4){
        for(let i = 0; i < line.length;i += 2){
            r.push(line[i] - 0)
        }
        num++
    }else if(num === 5){
        for(let i = 0; i < line.length;i += 2){
            oper.push(line[i])
        }
        num++
        // console.log(N, arr,operNum, l,r , oper);
    }else {
        for(let i = 0; i < line.length;i += 2){
            o.push(line[i] - 0)
        }
        for(let i = 0;i < operNum;i++){
            if(oper[i] === '='){
                for(let j = l[i] - 1; j<=(r[i] - 1)&&j<arr.length;j++){
                    arr[j] = o[i]
                }
            }else if(oper[i] === '|'){
                for(let j = l[i] - 1; j<=(r[i] - 1)&&j<arr.length;j++){
                    arr[j] = arr[j] | o[i]
                }
            }else {
                for(let j = l[i] - 1; j<=(r[i] - 1)&&j<arr.length;j++){
                    arr[j] = arr[j] & o[i]
                }
            }
            // console.log(arr);
        }
        // console.log(arr);
        for(var i = 0; i < arr.length - 1;i++){
            process.stdout.write(arr[i] + '')
            process.stdout.write(' ')
        }
        process.stdout._write(arr[arr.length - 1] + '')
    }
    
})