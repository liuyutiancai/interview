function findLongest(str){
    let map = new Map()
    for(let i=0; i < str.length;i++){
        if(map.get(str[i])){
            // map.get(str[i])++
            map.set(str[i],map.get(str[i]) + 1)
        }else{
            map.set(str[i],1)
        }
    }
    let arr = [...map]
    arr.sort((a,b) => a[1] - b[1])
    let map1 = new Map(),len = arr.length
    map1.set(arr[len-1][0],arr[len-1][1])
    let max = aSrr[len-1][1]
    for(let i=len-2;i >=0;i--){
        if(arr[i][1] == max){
            map1.set(arr[i][0],arr[i][1])
        }else {
            break
        }
    }
    return map1
}
findLongest('abcaakjbb')