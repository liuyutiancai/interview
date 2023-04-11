// test()方法
// var patt1 = new RegExp('e')
// console.log(patt1.test('The best things in life are free')); //true

// console.log(/love/i.test('I love JavaScript')); // true

// exec()方法
// let str = 'More about JavaScript at https://javascript.info';
// let regexp1 = /javascript/i;
// let regexp2 = /javascript/ig;
// console.log('没有全局匹配');
// console.log(regexp1.exec(str));
// console.log('全局匹配');
// let result
// while(result = regexp2.exec(str)) {
//     console.log(`Found ${result[0]} at position ${result.index}`);
// }

// split()方法
// console.log('12,24, 34,  44'.split(/,\s*/));

// replace()方法
// let str = 'hello Javascript Javascript Javascript'
// const regexp1 = /javascript/i
// const regexp2 = /javascript/ig
// console.log(str.replace(regexp1, 'js')); // hello js Javascript Javascript
// console.log(str.replace(regexp2, 'js')); // hello js js js

// search()方法, 返回(不管是不是全局匹配)第一个匹配项的位置,如果未找到则返回-1
// let str = "A drop of ink may make a million think";
// const regexp1 = /ink/i
// const regexp2 = /ink/ig
// console.log(str.search(regexp1)); // 10
// console.log(str.search(regexp2)); // 10

// match()方法
// let str = 'I love JavaScript'
// // 1.带有g标记
// const regexp1 = /Java(Script)/g
// let result1 = str.match(regexp1)
// console.log(result1); // [ 'JavaScript' ]
// // 2.不带有g标记
// const regexp2 = /Java(Script)/
// let result2 = str.match(regexp2)
// console.log(result2,result2.length,result2.index);
// // 3.不管带不带g标记,没有匹配项都返回null

// matchAll()方法 正则表达式需要是全局搜索
// const str = 'test1test2'
// const regexp = /t(e)(st(\d?))/g
// let result = [...str.matchAll(regexp)]
// console.log(result);

// 应用场景

// 将url解析为对象


