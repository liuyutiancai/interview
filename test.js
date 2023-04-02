// function  myInstanceof(obj, fun) {
//     if(!['function','object'].includes(typeof obj) || obj === null) 
//         return false
//     let proto = obj.__proto__, prototype = fun.prototype
//     while(proto != prototype){
//         proto = proto.__proto__
//         if(proto == null)
//             return false
//     }
//     return true
// }
// console.log(myInstanceof('123', String));

// function addToList(item, list) {
//     return list.push(item)
//     }
//     const result = addToList("nowcoder", ["hello"])
//     console.log(result)
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on('line',(line)=>{
    console.log(line);
})