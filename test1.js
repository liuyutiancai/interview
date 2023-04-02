// 小红书笔试第一题
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let num = 0
// let N, S1
// rl.on('line',(line) => {
//     if(num === 0){
//         N = line
//         num++
//     }else{
//         S1 = line
//         let map = {
//             '97':'a',
//             '98':'b',
//             '99':'c',
//             '100':'d',
//             '101':'e',
//             '102':'f',
//             '103':'g',
//             '104':'h',
//             '105':'i',
//             '106':'j',
//             '107':'k',
//             '108':'l',
//             '109':'m',
//             '110':'n',
//             '111':'o',
//             '112':'p',
//             '113':'q',
//             '114':'r',
//             '115':'s',
//             '116':'t',
//             '117':'u',
//             '118':'v',
//             '119':'w',
//             '120':'x',
//             '121':'y',
//             '122':'z',
//         }
//         // let map = new Map()
//         let S = ''
//         for(let i = 0; i < N; i++){
//             // if(map.get(S1[i].charCodeAt())){
//                 // S+=map.get((S1[i].charCodeAt()-3) + '')
//                 if(S1[i] === 'a') S+='x'
//                 else if(S1[i] === 'b') S+='y'
//                 else if(S1[i] === 'c') S+='z'
//                 else S+=map[(S1[i].charCodeAt()-3) + '']
//             // }else {
//             //     map.set(S1[i].charCodeAt() + '',S1[i])
//             // }
//         }
//         // console.log(map);
//         console.log(S);
//     }  
// })
console.log('a'.charCodeAt());
console.log(String.fromCharCode('a'.charCodeAt()));