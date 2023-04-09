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



// sort()方法
// 用于对数组的元素进行排序,可以按照字母或数字进行排序,可以进行升序或降序排序
// 按照数字进行排序时,必须指定通过一个函数作为参数
// 默认为按照字母升序进行排序
// 1.sort()方法会改变原数组
const fruits = ['Banana','Orange','Apple','Mango']
fruits.sort()
console.log(fruits);
// 2.按照数字排序 
// 2.1升序
const points = [40,100,1,5,25,10]
points.sort((a,b) => a -b)
console.log(points);

// 2.2降序
points.sort((a,b) => b - a)
console.log(points);

// 3.按照字母 降序
fruits.reverse()
console.log(fruits);