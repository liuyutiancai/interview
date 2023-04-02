// [
//     {
//         "id": 1,
//         "name": "部门1",
//         "pid": 0,
//         "children": [
//             {
//                 "id": 2,
//                 "name": "部门2",
//                 "pid": 1,
//                 "children": []
//             },
//             {
//                 "id": 3,
//                 "name": "部门3",
//                 "pid": 1,
//                 "children": [
//                     // 结果 ,,,
//                 ]
//             }
//         ]
//     }
// ]

let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]
// /**
//  * 递归查找，获取children
//  */
// const getChildren = (data, result, pid) => {
//     for (const item of data) {
//       if (item.pid === pid) {
//         const newItem = {...item, children: []};
//         result.push(newItem);
//         getChildren(data, newItem.children, item.id);
//       }
//     }
// }

// /**
//  * 转换方法
//  */
// const arrayToTree = (data, pid) => {
//     const result = [];
//     getChildren(data, result, pid)
//     return result;
// }
function listToTree(data) {
    let map = new Map()
    let tree = []
    for(let i = 0; i < data.length;i++){
        map.set(data[i].id,data[i])
    }
    for(let key of map.keys()){
        if(map.get(key).pid){
            if(!map.get(map.get(key).pid).children){
                map.get(map.get(key).pid).children = []
            }
            map.get(map.get(key).pid).children.push(map.get(key))
        }else {
            tree.push(map.get(key))
        }
    }
    return tree
}
console.log(listToTree(arr)[0].children);
// function arrayToTree(items){
//     const result = []
//     const itemMap = {}
//     for(const item of items){
//         // itemMap[item.id] = {...item,children:[]}
//         console.log(...item);
//     }
//     // console.log(itemMap);
// }
// arrayToTree(arr)