// 数组去重
let arr = [1,2,3,4,4,2,6,6]
// 1.set关键字
const newArr = [...new Set(arr)]
// 或者
const newArr1 = Array.from(new Set(arr))
console.log(newArr);
console.log(newArr1);
// 2.filter和indexOf
// filter接收两个参数,返回一个新数组,不会对原数组进行改变
// 第一个回调函数必选function(currentValue,index,arr) currentValue必选
// thisValue可选

// indexOf查找元素第一次出现在数组中的位置,如果找不到就返回-1
// 两个参数
// item必选; start可选,开始查找的位置,取值为0-arr.length-1
const newArr2 = arr.filter((currentValue,index) => arr.indexOf(currentValue) === index)
console.log(newArr2);

// 将多维数组变为一维数组
